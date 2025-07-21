import { NextRequest , NextResponse } from "next/server";
import { geolocation } from "@vercel/functions";
import { api } from "@/convex/_generated/api";
import { ClientTrackingData , ServerTrackingEvent} from "@/lib/types";
import { getClient } from "@/convex/lib/client";
import { count, profile, time } from "console";

export async function POST(request: NextRequest) {
  try {
    const data: ClientTrackingData = await request.json();
    const geo = await geolocation(request);

    const convex = getClient()

    // get user id from username
    const userId = await convex.query(api.lib.usernames.getUserIdBySlug, {
        slug : data.profileUsername
    })

    if(!userId) {
      return NextResponse.json({ error: "Profile not found"},{status: 404 })
    }
    const trackingEvent: ServerTrackingEvent = {
      ...data, // client data

      // ... server data
      timestamp: new Date().toISOString(),
       profileUserId: userId,
      location: {
       ...geo
      },
      userAgent: data.userAgent || request.headers.get("user-agent") || "unknown",
    
    };
    if (process.env.TINYBIRD_TOKEN && process.env.TINYBIRD_HOST) {
      try{
        const eventForTinybird = {
          timestamp: trackingEvent.timestamp,
          profileUsername: trackingEvent.profileUsername,
          profileUserId: trackingEvent.profileUserId,
          linkId: trackingEvent.linkId,
          linkTitle: trackingEvent.linkTitle,
          linkUrl: trackingEvent.linkUrl,
          userAgent: trackingEvent.userAgent,
          referrer: trackingEvent.referrer , 
          location: {
            country: trackingEvent.location.country || "",
            region: trackingEvent.location.region || "",
            city: trackingEvent.location.city || "",
            latitude: trackingEvent.location.latitude || "",
            longitude: trackingEvent.location.longitude || "",
          }
        }
          console.log("sending event to tinybird", JSON.stringify(eventForTinybird , null , 2))

          const tinybirdResponse = await fetch(
            `${process.env.TINYBIRD_HOST}/v0/events?name=link_clicks`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${process.env.TINYBIRD_TOKEN}`,
                "Content-Type": "application/json",

            },
            body: JSON.stringify(eventForTinybird),
          }
          );
          console.log(tinybirdResponse)

          if (!tinybirdResponse.ok) {
            console.error("Failed to send event to Tinybird:", await tinybirdResponse.text());
          } else {
            const responseBody = await tinybirdResponse.json();
            console.log("Event sent to Tinybird successfully:", responseBody);

            if (responseBody.quarantined_rows > 0) {
              console.warn("Some rows were quarantined in Tinybird:", responseBody.quarantined_rows);
            } 
          }
          console.log("TINYBIRD_HOST:", process.env.TINYBIRD_HOST);
          console.log("TINYBIRD_TOKEN:", process.env.TINYBIRD_TOKEN);

      } catch (error) {

        console.error(error , "Tinybird request failed");
    }
 
    } else {
      console.log("Tinybird not configured, skipping event tracking");
    }
    return NextResponse.json({ success: true }, { status: 200 });
   
  } 
  catch (error) {
    console.error("Error tracking link click:", error);
    return NextResponse.json({  error: "Failed to track link click" }, { status: 500 });
  }
}
import { NextRequest , NextResponse } from "next/server";
import { geolocation } from "@vercel/functions";
import { api } from "@/convex/_generated/api";
import { ClientTrackingData , ServerTrackingEvent} from "@/lib/types";
import { getClient } from "@/convex/lib/client";

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

    }
    
   
  } catch (error) {
    console.error("Error tracking link click:", error);
    return NextResponse.json({  error: "Failed to track link click" }, { status: 500 });
  }
}
import { query } from "../_generated/server";
import { v } from "convex/values";

export const getLinksBySlug = query({
  args: {
    slug: v.string(),
  },
  returns: v.array(
    v.object({
      _id: v.id("links"),
      _creationTime: v.number(),
      userId: v.string(),
      title: v.string(),
      url: v.string(),
      order: v.number(),
    })
  ),
  handler: async ({ db }, args) => {
    // Try to find a user by username
    const usernameRecord = await db
      .query("usernames")
      .withIndex("by_username", (q) => q.eq("username", args.slug))
      .unique();

    // If found, use userId from the username record; otherwise, treat slug as userId
    const userId = usernameRecord ? usernameRecord.userId : args.slug;

    // Fetch links for the user and ensure order is a number
    const links = await db
      .query("links")
      .withIndex("by_user_and_order", (q) => q.eq("userId", userId))
      .order("asc")
      .collect();

    // Convert `order` to number if it's not already
    return links.map((link) => ({
      ...link,
      order: Number(link.order),
    }));
  },
});

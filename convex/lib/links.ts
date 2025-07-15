import { mutation, query } from "../_generated/server";
import { v } from "convex/values";



export const getLinksByUserId = query({
  args: {
    userId: v.string(),
  },
  returns: v.array(
    v.object({
      _id: v.id("links"),
      _creationTime: v.number(),
      userId: v.string(),
      title: v.string(),
      url: v.string(),
      order: v.number(),
    }),
  ),
  handler: async ({ db }, args) => {
    const results = await db
      .query("links")
      .withIndex("by_user_and_order", (q) => q.eq("userId", args.userId))
      .order("asc")
      .collect();

    // Convert string `order` to number
    return results.map((link) => ({
      ...link,
      order: Number(link.order),
    }));
  },
});


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
export const updateLinkOrder = mutation({
  args: { linkIds: v.array(v.id("links")) },
  returns: v.null(),
  handler: async ({ db, auth }, { linkIds }) => {
    const identity = await auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const links = await Promise.all(linkIds.map((linkId) => db.get(linkId)));

    const validLinks = links
      .map((link, index) => ({ link, originalIndex: index }))
      .filter(({ link }) => link && link.userId === identity.subject)
      .map(({ link, originalIndex }) => ({
        link: link as NonNullable<typeof link>,
        originalIndex,
      }));

    // Update only valid links with their new order as a string
    await Promise.all(
      validLinks.map(({ link, originalIndex }) =>
        db.patch(link._id, { order: String(originalIndex) })
      )
    );

    return null;
  },
});

// Upfdate link title and URL
export const updateLink = mutation({
  args: {
    linkId: v.id("links"),
    title: v.string(),
    url: v.string(),
  },
  returns: v.null(),
  handler: async ({ db, auth }, args) => {
    const identity = await auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const link = await db.get(args.linkId);
    if (!link || link.userId !== identity.subject) 
      throw new Error("Unauthorized")

    // Update the link with the new title and URL
    await db.patch(args.linkId, {
     title : args.title, 
     url : args.url });

    return null;
  }

})

export const deleteLink = mutation({
  args: {
    linkId: v.id("links"),
  },
  returns: v.null(),
  handler: async ({ db, auth }, args) => {
    const identity = await auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const link = await db.get(args.linkId);
    if (!link || link.userId !== identity.subject) 
      throw new Error("Unauthorized")

    // Update the link with the new title and URL
    await db.delete(args.linkId);

    return null;
  }
});


export const getLinkCountByUserId = query({
  args: {
    userId: v.string(),
  },
  returns: v.number(),
  handler: async ({ db }, args) => {
    const links = await db
      .query("links")
      .withIndex("by_user_and_order", (q) => q.eq("userId", args.userId))
      .collect(); 

    return links.length;
  }
});

export const createLink = mutation({    
  args: {
    title: v.string(),
    url: v.string(),
  },
  returns: v.id("links"),
  handler: async ({ db, auth }, args) => {
    const identity = await auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    // Create a new link with the provided title and URL
    return await db.insert("links", {
      userId: identity.subject,
      title: args.title,
      url: args.url,
      order: Date.now().toString(), // Convert number to string
    });
  }
});



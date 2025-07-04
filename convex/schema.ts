import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is entirely optional.
// You can delete this file (schema.ts) and the
// app will continue to work.
// The schema provides more precise TypeScript types.
export default defineSchema({
  usernames : defineTable({
    userId : v.string(),
    username : v.string()
  })
 .index("by_user_id" , ["userId"])
 .index("by_username" , ["username"]),

 links: defineTable({
  userId : v.string(),
  title : v.string(),
  url : v.string(),
  order : v.string()
 })
  .index("by_user" , ["userId"])
 .index("by_user_and_order" , ["userId" , "order"]),

 userCustomizations: defineTable({
  userId: v.string(),
  profilePictureStorageId: v.optional(v.id("_storage")),
  description: v.optional(v.string()),
  accentColor: v.optional(v.string())
 }).index("by_user_id" , ["userId"])
});

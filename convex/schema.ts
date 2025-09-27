import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    fullName: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  })
    .index("by_clerk_id", ["clerkId"])
    .index("by_email", ["email"]),
  
  messages: defineTable({
    body: v.string(),
    author: v.string(),
  }),
  
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
});

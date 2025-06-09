import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Get user by userId
export const getUser = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .first();
  },
});

// Create or update user
export const upsertUser = mutation({
  args: {
    userId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    avatar: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .first();

    const now = Date.now();

    if (existingUser) {
      return await ctx.db.patch(existingUser._id, {
        ...args,
        lastSeen: now,
      });
    } else {
      return await ctx.db.insert("users", {
        ...args,
        createdAt: now,
        lastSeen: now,
      });
    }
  },
});

// Update user last seen
export const updateLastSeen = mutation({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .first();

    if (user) {
      return await ctx.db.patch(user._id, {
        lastSeen: Date.now(),
      });
    }
  },
});
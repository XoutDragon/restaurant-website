import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	menuItem: defineTable({
		name: v.string(),
		description: v.optional(v.string()),
		pintPrice: v.optional(v.number()),
		quartPrice: v.optional(v.number()),
		price: v.optional(v.number()),
		spicy: v.boolean(),
		category: v.string(),
	}).index('category', ['category']),
});

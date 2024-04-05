import { v } from 'convex/values';

import { mutation, query } from './_generated/server';
import { Doc, Id } from './_generated/dataModel';

export const addMenuItem = mutation({
	args: {
		name: v.string(),
		description: v.optional(v.string()),
		pintPrice: v.optional(v.number()),
		quartPrice: v.optional(v.number()),
		price: v.optional(v.number()),
		spicy: v.boolean(),
		category: v.string(),
	},
	handler: async (ctx, args) => {
		// TODO: Add authentication

		// const identity = await ctx.auth.getUserIdentity();

		// if (!identity) {
		// 	throw new Error('Not authenticated');
		// }

		const menuItem = await ctx.db.insert('menuItem', {
			...args,
		});

		return menuItem;
	},
});

export const removeMenuItem = mutation({
	args: {
		id: v.id('menuItem'),
	},
	handler: async (ctx, args) => {
		// TODO: Add authentication
		// const identity = await ctx.auth.getUserIdentity();
		// if (!identity) {
		// 	throw new Error('Not authenticated');
		// }

		const existingItem = await ctx.db.get(args.id);

		if (!existingItem) {
			throw new Error('Item not found');
		}

		const menuItem = await ctx.db.delete(args.id);

		return menuItem;
	},
});

export const editMenuItem = mutation({
	args: {
		id: v.id('menuItem'),
		name: v.optional(v.string()),
		description: v.optional(v.string()),
		pintPrice: v.optional(v.number()),
		quartPrice: v.optional(v.number()),
		price: v.optional(v.number()),
		spicy: v.optional(v.boolean()),
		category: v.optional(v.string()),
	},
	handler: async (ctx, args) => {
		// TODO: Add authentication
		// const identity = await ctx.auth.getUserIdentity();
		// if (!identity) {
		// 	throw new Error('Not authenticated');
		// }

		const existingItem = await ctx.db.get(args.id);

		if (!existingItem) {
			throw new Error('Item not found');
		}

		const { id, ...rest } = args;

		const menuItem = await ctx.db.patch(args.id, {
			...rest,
		});

		return menuItem;
	},
});

export const getMenuItems = query({
	args: {
		category: v.string(),
	},
	handler: async (ctx, args) => {
		const menuItems = await ctx.db
			.query('menuItem')
			.withIndex('category')
			.filter((q) => q.eq(q.field('category'), args.category))
			.collect();

		return menuItems;
	},
});

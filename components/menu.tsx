'use client';

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

import { MenuCategories } from '@/data/globals';

import { GiChiliPepper } from 'react-icons/gi';

const Menu = () => {
	const appetizers = useQuery(api.menuItems.getMenuItems, {
		category: 'Appetizer',
	});

	const soup = useQuery(api.menuItems.getMenuItems, {
		category: 'Soup',
	});

	const friedRice = useQuery(api.menuItems.getMenuItems, {
		category: 'Fried Rice',
	});

	const loMein = useQuery(api.menuItems.getMenuItems, {
		category: 'Lo Mein',
	});

	const chowMein = useQuery(api.menuItems.getMenuItems, {
		category: 'Chow Mein',
	});

	const sweetSour = useQuery(api.menuItems.getMenuItems, {
		category: 'Sweet & Sour',
	});

	const eggFooYoung = useQuery(api.menuItems.getMenuItems, {
		category: 'Egg Foo Young',
	});

	const chicken = useQuery(api.menuItems.getMenuItems, {
		category: 'Chicken',
	});

	const pork = useQuery(api.menuItems.getMenuItems, {
		category: 'Pork',
	});

	const vegetable = useQuery(api.menuItems.getMenuItems, {
		category: 'Vegetable',
	});

	const beef = useQuery(api.menuItems.getMenuItems, {
		category: 'Beef',
	});

	const seafood = useQuery(api.menuItems.getMenuItems, {
		category: 'Seafood',
	});

	const dinnerCombinations = useQuery(api.menuItems.getMenuItems, {
		category: 'Dinner Combinations',
	});

	const lunchSpecial = useQuery(api.menuItems.getMenuItems, {
		category: 'Lunch Special',
	});

	const chefsSpecial = useQuery(api.menuItems.getMenuItems, {
		category: "Chef's Special",
	});

	const sideOrder = useQuery(api.menuItems.getMenuItems, {
		category: 'Side Order',
	});

	const weightWatcherSpecial = useQuery(api.menuItems.getMenuItems, {
		category: 'Weight Watcher Special',
	});

	const familyDinnerSpecial = useQuery(api.menuItems.getMenuItems, {
		category: 'Family Dinner Special',
	});

	const partySpecial = useQuery(api.menuItems.getMenuItems, {
		category: 'Party Special',
	});

	const happyKidsMeal = useQuery(api.menuItems.getMenuItems, {
		category: 'Happy Kids Meal',
	});

	const categories: any = [
		appetizers,
		soup,
		friedRice,
		loMein,
		chowMein,
		sweetSour,
		eggFooYoung,
		chicken,
		pork,
		vegetable,
		beef,
		seafood,
		dinnerCombinations,
		lunchSpecial,
		chefsSpecial,
		sideOrder,
		weightWatcherSpecial,
		familyDinnerSpecial,
		partySpecial,
		happyKidsMeal,
	];

	return (
		<>
			<div className='grid'>
				{MenuCategories.map((category, i) => (
					<Accordion key={i} type='single' collapsible className='w-60'>
						<AccordionItem value='item-1'>
							<AccordionTrigger className='text-white bg-red-500 px-2'>
								{category}
							</AccordionTrigger>
							<AccordionContent>
								{categories[i]?.map((item: any) => (
									<div key={item.id}>
										<div
											className={`flex justify-between ${item.spicy && 'text-red-500'}`}
										>
											<div className='flex items-center'>
												{item.spicy ? (
													<GiChiliPepper className='mr-1' />
												) : (
													<div className='w-4 mr-1' />
												)}
												<h3>{item.name}</h3>
												<p>{item.description}</p>
											</div>
											<div>
												<p>{item.price}</p>
											</div>
										</div>
									</div>
								))}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				))}
			</div>
		</>
	);
};

export default Menu;

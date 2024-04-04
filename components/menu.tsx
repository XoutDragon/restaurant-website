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

const Menu = () => {
	const appetizers = useQuery(api.menuItems.getMenuItemsByCategory, {
		category: 'Appetizer',
	});
	return (
		<>
			<div
				className='grid gap-1'
				style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
			>
				{MenuCategories.map((category, i) => (
					<Accordion key={i} type='single' collapsible className='w-60'>
						<AccordionItem value='item-1'>
							<AccordionTrigger className='text-white bg-red-500 px-2'>
								{category}
							</AccordionTrigger>
							<AccordionContent>
								{appetizers?.map((item, i) => (
									<div key={i} className='p-2'>
										<h3 className='text-xl font-bold'>{item.name}</h3>
										<p>{item.description}</p>
										<p>{item.price}</p>
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

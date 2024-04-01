'use client';

import { usePathname } from 'next/navigation';

import { ShoppingCart } from 'lucide-react';

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useClosed } from '@/hooks/use-closed';
import { useEffect } from 'react';

const Navbar = () => {
	const pathname = usePathname();
	const closed = useClosed();

	const times: any = {
		1: {
			open: 11,
			close: 21,
		},
		2: {
			open: 11,
			close: 21,
		},
		3: {
			open: 11,
			close: 21,
		},
		4: {
			open: 11,
			close: 21,
		},
		5: {
			open: 11,
			close: 21,
		},
		6: {
			open: 11,
			close: 21,
		},
		7: {
			open: 12,
			close: 21,
		},
	};

	useEffect(() => {
		const date = new Date();

		if (date.getDay() === 1) {
			closed.text = 'We are closed on Mondays.';
			closed.onOpen();
			return;
		}

		if (10 < times[date.getDay()].open) {
			closed.text = `We are open today at ${
				times[date.getDay()].open
			} am. We are closed today at ${times[date.getDay()].close - 12} pm.`;
			closed.onOpen();
			return;
		}
	}, []);

	return (
		<div>
			<nav className='bg-red-800'>
				<div className='flex justify-between items-center'>
					<h1 className='text-white'>China House</h1>
					<div>
						<ShoppingCart className='w-8 h-8' />
					</div>
				</div>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem
							className={`${pathname === '/' ? 'text-white' : 'text-gray-300'}`}
						>
							Menu
						</BreadcrumbItem>
						<BreadcrumbSeparator className='text-white' />
						<BreadcrumbItem
							className={`${
								pathname === '/checkout' ? 'text-white' : 'text-gray-300'
							}`}
						>
							Checkout
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</nav>
		</div>
	);
};

export default Navbar;

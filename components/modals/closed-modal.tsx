'use client';

import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogTrigger,
} from '@/components/ui/dialog';

import { useClosed } from '@/hooks/use-closed';
import { Button } from '../ui/button';

export const ClosedModal = () => {
	const closed = useClosed();

	return (
		<Dialog open={closed.isOpen} onOpenChange={closed.onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Store Closed</DialogTitle>
					<DialogDescription className='max-w-[16rem]'>
						{closed.text || 'We are closed at the moment'}
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button variant='default' onClick={closed.onClose}>
						Close
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

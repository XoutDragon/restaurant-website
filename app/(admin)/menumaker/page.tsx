// Paper size A3 (297mm x 420mm)\

'use client';

import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

import Menu from '@/components/menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { MenuCategories } from '@/data/globals';
import { Button } from '@/components/ui/button';

const MenuMaker = () => {
	const { toast } = useToast();

	const addMenuItem = useMutation(api.menuItems.addMenuItem);
	const removeMenuItem = useMutation(api.menuItems.removeMenuItem);
	const editMenuItem = useMutation(api.menuItems.editMenuItem);

	const [form, setForm] = useState({
		name: '',
		description: '',
		pintPrice: 0,
		quartPrice: 0,
		price: 0,
		spicy: false,
		category: 'Appetizer',
	});

	const handleAddItem = () => {
		addMenuItem(form)
			.then(() => {
				toast({
					title: `Item added to category ${form.category}`,
					description: (
						<>
							<p>Name: {form.name}</p>
							{form.description && <p>Description: {form.description}</p>}
							{form.spicy && <p>Spicy</p>}
							{form.pintPrice && <p>Pint Price: {form.pintPrice}</p>}
							{form.quartPrice && <p>Quart Price: {form.quartPrice}</p>}
							{form.price && <p>Price: {form.price}</p>}
						</>
					),
				});

				setForm({
					name: '',
					description: '',
					pintPrice: 0,
					quartPrice: 0,
					price: 0,
					spicy: false,
					category: 'Appetizer',
				});
			})
			.catch((e) => {
				toast({
					title: 'Error',
					description: e.message,
				});
			});
	};

	return (
		<div className='w-full p-4'>
			<div className='grid grid-cols-2'>
				<div>
					<h3 className='text-2xl font-bold'>Menu</h3>
					<Menu />
				</div>

				<div className='flex-col items-center justify-center space-y-10'>
					<h2 className='text-center text-slate-900'>Add Item to Menu</h2>
					<form className='grid grid-flow-row gap-4 bg-gray-100 p-10 rounded-lg'>
						<Select
							onValueChange={(e) => {
								setForm({ ...form, category: e });
							}}
						>
							<SelectTrigger>
								<SelectValue placeholder='Select a category'>
									{form.category}
								</SelectValue>
							</SelectTrigger>
							<SelectContent>
								{MenuCategories.map((category, i) => (
									<SelectItem key={i} value={category}>
										{category}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<div>
							<Label>Name</Label>
							<Input
								value={form.name}
								onChange={(e) => setForm({ ...form, name: e.target.value })}
							/>
						</div>
						<div>
							<Label>Description</Label>
							<Input
								value={form.description}
								onChange={(e) =>
									setForm({ ...form, description: e.target.value })
								}
							/>
						</div>
						<div className='flex justify-evenly gap-2 items-center'>
							<>
								<Label className='mr-2'>Pint Price</Label>
								<Input
									className='w-36'
									type='text'
									onChange={(e) =>
										setForm({ ...form, pintPrice: parseFloat(e.target.value) })
									}
								/>
							</>

							<>
								<Label className='mr-2'>Quart Price</Label>
								<Input
									type='text'
									className='w-36'
									onChange={(e) =>
										setForm({ ...form, quartPrice: parseFloat(e.target.value) })
									}
								/>
							</>
						</div>
						<div>
							<Label>Price</Label>
							<Input
								type='text'
								placeholder='Fill if no pint or quart price'
								onChange={(e) =>
									setForm({ ...form, price: parseFloat(e.target.value) })
								}
							/>
						</div>
						<div className='flex items-center'>
							<Checkbox
								id='spicy'
								checked={form.spicy}
								onCheckedChange={(e) =>
									setForm({ ...form, spicy: form.spicy ? false : true })
								}
							/>
							<Label className='ml-2'>Spicy</Label>
						</div>
						<Button
							onClick={(e) => {
								e.preventDefault();
								handleAddItem();
							}}
						>
							Add Item
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default MenuMaker;

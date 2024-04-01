'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
	const [lunch, setLunch] = useState(false);
	const [dinner, setDinner] = useState(false);

	useEffect(() => {
		const date = new Date();

		if (date.getHours() < 12 && date.getDay() !== 0) {
			setLunch(true);
		} else {
			setDinner(true);
		}
	}, []);

	return (
		<main className='p-2'>
			<h2>Menu</h2>

			{lunch && 'Dinner'}
		</main>
	);
}

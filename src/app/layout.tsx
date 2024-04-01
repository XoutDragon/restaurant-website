import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ModalProvider } from '@/components/providers/modal-provider';

import Navbar from './_components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'China House',
	description: `
    790 W King St, Littlestown PA 17340
    (717) - 359 - 8388
  `,
	icons: {
		icon: [
			{
				url: './logo.png',
				href: './logo.png',
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				<ModalProvider />
				{children}
			</body>
		</html>
	);
}

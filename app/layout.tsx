import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ModalProvider } from '@/components/providers/modal-provider';
import { ConvexClientProvider } from '@/components/providers/convex-provider';
import { cn } from '@/lib/utils';

import { Toaster } from '@/components/ui/toaster';

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
			<body className={cn('h-full', inter.style)}>
				<ConvexClientProvider>
					<ModalProvider />
					<Toaster />
					{children}
				</ConvexClientProvider>
			</body>
		</html>
	);
}

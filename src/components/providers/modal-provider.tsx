'use client';

import { useEffect, useState } from 'react';

import { ClosedModal } from '../modals/closed-modal';

export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return <ClosedModal />;
};

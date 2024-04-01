import create from 'zustand';

type ClosedStore = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	text?: string;
};

export const useClosed = create<ClosedStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	text: '',
}));

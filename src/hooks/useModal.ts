import { useState, useEffect } from 'react';

export const useModal = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isModalOpen) {
				handleCancel();
			}
			if (event.key === 'Enter' && isModalOpen) {
				handleOk();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isModalOpen, handleCancel]);

	return {
		isModalOpen,
		showModal,
		handleOk,
		handleCancel,
	};
};

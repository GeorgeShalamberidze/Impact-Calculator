import { useState } from 'react';

const useTabs = () => {
	const [amount, setAmount] = useState<number>(3000);
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (tabIndex: number) => {
		setActiveTab(tabIndex);
	};
	return {
		amount,
		activeTab,
		handleTabClick,
	};
};

export default useTabs;

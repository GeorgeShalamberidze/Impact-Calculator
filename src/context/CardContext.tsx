import { createContext, useState } from 'react';

type CardContextProviderProps = {
	children: React.ReactNode;
};

export type CardContextType = {
	activeTab: number;
	investment: number;
	date: Date;
	handleDateChange: (date: Date) => void;
	handleInvestmentChange: (val: any) => void;
	handleTabClick: (tabIndex: number) => void;
};

export const CardContext = createContext<CardContextType | null>(null);

const CardContextProvider = ({ children }: CardContextProviderProps) => {
	const [activeTab, setActiveTab] = useState<number>(0);
	const [investment, setInvestment] = useState<number>(3000);
	const [date, setDate] = useState<Date>(new Date());

	const min = 1;
	const max = 1000000;

	const handleInvestmentChange = (e: any) => {
		const { value }: { value: number } = e.target;
		const formattedVal = Math.max(min, Math.min(max, Number(value)));

		if (isNaN(value)) return;

		setInvestment(formattedVal);
		if (value > max) setInvestment(investment);
	};

	const handleTabClick = (tabIndex: number) => {
		setActiveTab(tabIndex);
	};

	const handleDateChange = (date: Date) => {
		setDate(date);
	};

	return (
		<CardContext.Provider
			value={{
				activeTab,
				investment,
				date,
				handleDateChange,
				handleInvestmentChange,
				handleTabClick,
			}}
		>
			{children}
		</CardContext.Provider>
	);
};

export default CardContextProvider;

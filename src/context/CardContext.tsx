import { Card } from '@/types/CardType';
import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

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
	cardsData: Card[];
};

export const CardContext = createContext<CardContextType | null>(null);

const CardContextProvider = ({ children }: CardContextProviderProps) => {
	const [activeTab, setActiveTab] = useState<number>(0);
	const [investment, setInvestment] = useState<number>(3000);
	const [date, setDate] = useState<Date>(new Date());
	const [cardsData, setCardsData] = useState<Card[]>([]);
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

	useEffect(() => {
		axios
			.get<Card[]>('src/assets/json/data.json')
			.then((res) => setCardsData(res.data));
	}, []);

	return (
		<CardContext.Provider
			value={{
				cardsData,
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

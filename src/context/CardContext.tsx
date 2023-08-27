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
	cardsData: Card[];
	cumulatedImpactSavings: number;
	setCumulatedImpactSavings: React.Dispatch<React.SetStateAction<number>>;
	handleDateChange: (date: Date) => void;
	handleInvestmentChange: (val: any) => void;
	handleTabClick: (tabIndex: number) => void;
};

export const CardContext = createContext<CardContextType | null>(null);

const CardContextProvider = ({ children }: CardContextProviderProps) => {
	const [activeTab, setActiveTab] = useState<number>(0);
	const [investment, setInvestment] = useState<number>(3000);
	const [date, setDate] = useState<Date>(new Date('2018-08-16'));
	const [cardsData, setCardsData] = useState<Card[]>([]);
	const [cumulatedImpactSavings, setCumulatedImpactSavings] =
		useState<number>(0);
	const minInvestmentVal = 1;
	const maxInvestmentVal = 1000000;

	useEffect(() => {
		axios
			.get<Card[]>('src/assets/json/data.json')
			.then((res) => setCardsData(res.data));
	}, []);

	const handleInvestmentChange = (e: any) => {
		const { value }: { value: number } = e.target;
		const formattedVal = Math.max(
			minInvestmentVal,
			Math.min(maxInvestmentVal, Number(value))
		);

		if (isNaN(value)) return;

		setInvestment(formattedVal);
		if (value > maxInvestmentVal) setInvestment(investment);
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
				cardsData,
				activeTab,
				investment,
				date,
				cumulatedImpactSavings,
				setCumulatedImpactSavings,
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

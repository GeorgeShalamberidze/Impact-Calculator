import { useContext } from 'react';
import ImpactCard from './impact-card';
import './style.css';
import { CardContext, CardContextType } from '@/context/CardContext';

const ImpactGrid = () => {
	const { cardsData } = useContext(CardContext) as CardContextType;
	return (
		<div className="grid_container grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5 pt-[30px] pr-[30px] pb-[35px] pl-[40px] justify-center items-center bg-[#f7f7f7]">
			{cardsData?.map((card) => <ImpactCard key={card.title} card={card} />)}
		</div>
	);
};

export default ImpactGrid;

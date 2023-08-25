import { CardType } from '@/types/CardType';
import ImpactCard from './impact-card';
import './style.css';

const ImpactGrid = ({ cardData }: { cardData?: CardType[] }) => {
	console.log(cardData);
	return (
		<div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 pt-[30px] pr-[30px] pb-[35px] pl-[40px] justify-center items-center bg-[#f7f7f7]">
			{cardData?.map((card) => <ImpactCard key={card.title} card={card} />)}
		</div>
	);
};

export default ImpactGrid;

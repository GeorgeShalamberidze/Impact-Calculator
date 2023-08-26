import { Card } from '@/types/CardType';
import '../style.css';
import { ACTIVE_TAB } from '@/enums/activeTab.enum';
import useImpactCard from '../hooks/useImpactCard';
import Front from './front';
import Back from './back';

const ImpactCard = ({ card }: { card: Card }) => {
	const {
		activeTab,
		impactNumber,
		equivalentImpactNumber,
		fixedEquivalent,
		fullYearBar,
	} = useImpactCard({
		card,
	});

	return (
		<div
			className={`flippable_card ${
				activeTab == ACTIVE_TAB.CUMULATED_IMPACT &&
				card.chartGroup &&
				'active_side'
			} relative w-[230px] h-[280px] text-black bg-white border border-solid border-[#d8d8d8]`}
		>
			<Front
				card={card}
				equivalentImpactNumber={equivalentImpactNumber}
				fixedEquivalent={fixedEquivalent}
				impactNumber={impactNumber}
			/>

			{card.chartGroup && <Back card={card} />}
		</div>
	);
};

export default ImpactCard;

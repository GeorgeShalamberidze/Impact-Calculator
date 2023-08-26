import { CardContext, CardContextType } from '@/context/CardContext';
import { Card } from '@/types/CardType';
import { useContext } from 'react';
import { useSpring } from 'react-spring';

const useImpactCard = ({ card }: { card: Card }) => {
	const { activeTab, investment } = useContext(CardContext) as CardContextType;
	const originalImpact = (card?.normalizedImpact * investment) / 1000000;
	const originalEquivalentImpact =
		(card?.normalizedEquivalent * investment) / 1000000;

	const impact = Math.round(Math.abs(originalImpact) * 10) / 10;
	const equivalentImpact = Math.round(originalEquivalentImpact * 10) / 10;

	const { number: impactNumber } = useSpring({
		from: { number: 0 },
		number: impact,
		delay: 50,
		config: { mass: 1, tension: 20, friction: 10 },
	});

	const { number: equivalentImpactNumber } = useSpring({
		from: { number: 0 },
		number: equivalentImpact,
		delay: 50,
		config: { mass: 1, tension: 20, friction: 10 },
	});

	return {
		impact,
		equivalentImpact,
		impactNumber,
		equivalentImpactNumber,
		activeTab,
	};
};

export default useImpactCard;

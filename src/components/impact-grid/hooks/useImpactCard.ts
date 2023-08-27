import { CardContext, CardContextType } from '@/context/CardContext';
import { calculateCumulativeImpact } from '@/helpers/calculateCumulativeImpact';
import { springNumberFunc } from '@/helpers/springNumberFunc';
import { Card } from '@/types/CardType';
import { useContext } from 'react';

const useImpactCard = ({ card }: { card: Card }) => {
	const { activeTab, investment, date } = useContext(
		CardContext
	) as CardContextType;

	const { normalizedEquivalent, normalizedImpact, fixedEquivalent } = card;
	const originalImpact = (normalizedImpact * investment) / 1000000;
	const originalEquivalentImpact =
		(normalizedEquivalent * investment) / 1000000;

	const impact = (originalImpact * 10) / 10;
	const equivalentImpact = (originalEquivalentImpact * 10) / 10;

	const { number: impactNumber } = springNumberFunc(normalizedImpact && impact);
	const { number: equivalentImpactNumber } = springNumberFunc(
		normalizedEquivalent && equivalentImpact
	);

	const cumulatedBarData = calculateCumulativeImpact(impact, date);
	const chartData = [cumulatedBarData, impact];

	return {
		impact,
		date,
		equivalentImpact,
		fixedEquivalent,
		impactNumber,
		equivalentImpactNumber,
		activeTab,
		chartData,
	};
};

export default useImpactCard;

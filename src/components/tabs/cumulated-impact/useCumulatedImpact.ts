import { CardContext, CardContextType } from '@/context/CardContext';
import { calculateCumulativeImpact } from '@/helpers/calculateCumulativeImpact';
import { springNumberFunc } from '@/helpers/springNumberFunc';
import { useContext } from 'react';

const useCumulatedImpact = ({ investment }: { investment: number }) => {
	const { date, cardsData, handleDateChange } = useContext(
		CardContext
	) as CardContextType;

	let cumulatedSaving: number = 0;

	if (cardsData.length > 0 && date) {
		const { normalizedImpact } = cardsData[0];
		const originalImpact = (normalizedImpact * investment) / 1000000;
		const impact = (originalImpact * 10) / 10;
		const cumulatedBarData = calculateCumulativeImpact(impact, date);

		cumulatedSaving = (cumulatedBarData / impact) * 100;
	}
	const { number: cumulatedSavingNumber } = springNumberFunc(cumulatedSaving);

	return {
		date,
		cumulatedSavingNumber,
		handleDateChange,
	};
};

export default useCumulatedImpact;

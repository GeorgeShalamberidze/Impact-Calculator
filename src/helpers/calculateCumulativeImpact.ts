export const calculateCumulativeImpact = (
	fullYearImpact: number,
	selectedDate: Date
) => {
	const currentDate = new Date();
	const timeDifference = currentDate.getTime() - selectedDate.getTime();
	const monthsDifference = timeDifference / (1000 * 60 * 60 * 24 * 30.5);
	const cumulativeImpact = fullYearImpact * (monthsDifference / 12);

	return cumulativeImpact;
};

export const CalculateCumulativeImpact = (
	fullYearImpact: number,
	selectedDate: Date
) => {
	const currentDate = new Date();
	const yearsDifference =
		currentDate.getFullYear() - selectedDate.getFullYear();

	const cumulativeImpact = fullYearImpact * yearsDifference;

	return cumulativeImpact;
};

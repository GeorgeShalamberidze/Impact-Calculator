let formatting_options = {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0,
};

export const formattedAmount = (value: number) => {
	let dollarString = new Intl.NumberFormat('en-US', formatting_options);
	return dollarString.format(value);
};

export type CardType = {
	title: string;
	icons: [string];
	color: string;
	normalizedImpact: number;
	chartGroup: 'a' | 'b' | 'c' | null;
	impactUnit: string;
	impactDP: number;
	showFullYear: boolean;
	equivalentDesc: string;
	normalizedEquivalent: number;
	equivalentUnit: string;
	equivalentIcon: string;
	fixedEquivalent?: number;
};

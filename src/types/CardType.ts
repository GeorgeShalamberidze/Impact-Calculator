export type Card = {
	title: string;
	icons: [string];
	color: string;
	normalizedImpact: number;
	chartGroup: ChartGroup;
	impactUnit: string;
	impactDP: number;
	showFullYear: boolean;
	equivalentDesc: string;
	normalizedEquivalent: number;
	equivalentUnit: string;
	equivalentIcon: string;
	fixedEquivalent?: number;
};

export type ChartGroup = 'a' | 'b' | 'c' | null;

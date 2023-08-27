import BarChart from '@/components/chart';
import { Card } from '@/types/CardType';

type BackPropType = {
	card: Card;
	chartData: number[];
};

const Back = ({ card, chartData }: BackPropType) => {
	const { icons, title, color, showFullYear } = card;
	return (
		<div className="back absolute top-0 left-0 right-0 bottom-0 w-full h-full">
			<div className="back_wrapper relative">
				<div className="back_body flex flex-col items-center">
					<div className="img absolute w-[30px] top-[20px] right-[15px]">
						{icons.map((icon: string) => (
							<img src={`src/assets/svg/${icon}`} key={card.title} />
						))}
					</div>
					<div className="chart_wrapper">
						<BarChart
							data={chartData}
							color={color}
							showFullYear={showFullYear}
						/>
					</div>
				</div>
				<div className="back_lower_body w-full h-[40px] flex items-center justify-center">
					<div
						className="flex items-center justify-center text-[16px] "
						style={{
							color: `${color}`,
						}}
					>
						<p>{title}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Back;

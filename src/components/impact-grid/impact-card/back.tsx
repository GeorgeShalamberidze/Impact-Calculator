import { Card } from '@/types/CardType';

type BackPropType = {
	card: Card;
};

const Back = ({ card }: BackPropType) => {
	const { icons, title, color } = card;
	return (
		<div className="back absolute top-0 left-0 right-0 bottom-0 w-full h-full">
			<div className="back_wrapper relative">
				<div className="back_body flex flex-col items-center">
					<div className="img absolute w-[30px] top-[20px] right-[15px]">
						{icons.map((icon: string) => (
							<img src={`src/assets/svg/${icon}`} key={card.title} />
						))}
					</div>
					<div className="chart_wrapper">chart here!</div>
				</div>
				<div className="back_lower_body w-full h-10">
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

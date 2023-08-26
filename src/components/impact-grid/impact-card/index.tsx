import { Card } from '@/types/CardType';
import '../style.css';
import { ACTIVE_TAB } from '@/enums/activeTab.enum';
import { animated } from 'react-spring';
import useImpactCard from '../hooks/useImpactCard';

const ImpactCard = ({ card }: { card: Card }) => {
	const { activeTab, impactNumber, equivalentImpactNumber, fixedEquivalent } =
		useImpactCard({
			card,
		});

	return (
		<div
			className={`flippable_card ${
				activeTab == ACTIVE_TAB.CUMULATED_IMPACT &&
				card.chartGroup &&
				'active_side'
			} relative w-[230px] h-[280px] text-black bg-white border border-solid border-[#d8d8d8]`}
		>
			<div className="front absolute top-0 left-0 right-0 bottom-0 w-full h-full">
				<div className="front_wrapper">
					<div className="front_body flex flex-col items-center">
						<div className="img_wrapper h-[140px] flex justify-center">
							{card.icons.map((icon) => (
								<img src={`src/assets/svg/${icon}`} key={card.title} />
							))}
						</div>
						<div className="title">
							<p
								className={`text-[16px] font-semibold`}
								style={{
									color: `${card?.color}`,
								}}
							>
								{card.title}
							</p>
						</div>
						<div className="impact_unit">
							<p className="text-xl font-bold mb-[11px]">
								<animated.span>
									{impactNumber.to((n) => n.toFixed(1))}
								</animated.span>{' '}
								{card.impactUnit}
							</p>
						</div>
					</div>
					<div className="front_lower_body w-full">
						<div className="impact_equivalent_description w-full flex items-center justify-center border-t border-b border-soldid border-[#d8d8d8] mt-1 h-[34px] text-sm py-[7px] text-[#101215] font-semibold">
							<p>{card.equivalentDesc}</p>
						</div>
						<div className="flex h-[37px]">
							<div className="flex w-2/4 justify-center items-center border-r border-gray-300">
								<img
									src={`src/assets/svg/${card.equivalentIcon}`}
									alt={card.equivalentDesc}
								/>
							</div>
							<div
								className={`flex w-2/4 justify-center items-center  text-[17px] font-bold`}
								style={{
									color: `${card?.color}`,
								}}
							>
								{fixedEquivalent ? (
									`${fixedEquivalent} %`
								) : (
									<animated.p>
										{equivalentImpactNumber.to((n) => n.toFixed(1))}
									</animated.p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			{card.chartGroup && (
				<div
					className="back absolute top-0 left-0 right-0 bottom-0 w-full h-full"
					style={{ border: '1px solid red' }}
				>
					<div className="back_wrapper">
						<div className="back_body flex flex-col items-center"></div>
						<div className="back_lower_body w-full"></div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ImpactCard;

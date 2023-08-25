import { CardType } from '@/types/CardType';
import { useState } from 'react';

const ImpactCard = ({ card }: { card: CardType }) => {
	const [score, setScore] = useState<any>();

	const impact = Math.ceil((card.normalizedImpact * 3000) / 1000000); // Fix this
	const equivalentImpact = Math.ceil(
		(card.normalizedEquivalent * 3000) / 1000000
	); // Fix this

	return (
		<div className="wrapper w-[230px] h-[280px] text-black bg-white border border-solid border-[#d8d8d8]">
			<div className="front">
				<div className="front_wrapper">
					<div className="front_body flex flex-col items-center">
						<div className="img_wrapper w-full h-[140px] flex justify-center">
							{card.icons.map((icon) => (
								<img src={`src/assets/svg/${icon}`} />
							))}
						</div>
						<div className="title">
							<p className={`text-[16px] text-${card.color}-500 font-semibold`}>
								{card.title}
							</p>
						</div>
						<div className="impact_unit">
							<p className="text-xl font-bold mb-[11px]">
								{impact} {card.impactUnit}
							</p>
						</div>
					</div>
					<div className="lower_body w-full ">
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
								className={`flex w-2/4 justify-center items-center text-${card.color}-500 text-[17px] font-bold`}
							>
								{card.fixedEquivalent ? (
									`${card.fixedEquivalent} %`
								) : (
									<p>{equivalentImpact}</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImpactCard;

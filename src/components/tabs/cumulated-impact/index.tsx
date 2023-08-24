import { useState } from 'react';

const CumulatedImpactTab = () => {
	const [cumulatedImpact, setCumulatedImpact] = useState<number>(503);
	return (
		<div className="cumulated_tab_wrapper w-full flex">
			<div className="left justify-end flex w-2/4 p-[25px] ">
				<div className="date_wrapper flex flex-col items-center">
					<div className="label_date">
						<p className="text-sm text-[#4b4b4b] mb-3">
							Enter the start date of your investment
						</p>
					</div>
					<div className="datepicker text-[#101215] text-[32px] flex justify-center relative w-40">
						16/08/2022
					</div>
				</div>
			</div>
			<div className="right justify-start flex w-2/4 p-[25px]">
				<div className="savings_wrapper flex flex-col items-center">
					<div className="savings_label">
						<p className="text-sm text-[#4b4b4b] mb-3">
							Cumulated Impact since savings
						</p>
					</div>
					<div className="percentage text-[32px] text-[#006193] flex justify-center relative w-40">
						{`${cumulatedImpact}%`}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CumulatedImpactTab;

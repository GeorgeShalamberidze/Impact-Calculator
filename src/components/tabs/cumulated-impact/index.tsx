import { TabType } from '@/types/TabType';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import dayjs from 'dayjs';
import 'react-datepicker/dist/react-datepicker.css';

const CumulatedImpactTab = ({ isScrolled, investment }: TabType) => {
	const [date, setDate] = useState(new Date());

	console.log(dayjs(date).format('YYYY-MM-DD'));

	return (
		<div
			className={`cumulated_impact_animation w-full flex items-center transition-all duration-300 ${
				isScrolled &&
				'h-[57px] w-screen border-t border-b border-solid border-gray-300'
			}`}
		>
			<div
				className={`left justify-end flex w-2/4 transition-all duration-300 ${
					isScrolled ? 'px-[15px]' : 'p-[25px]'
				} xxxs:p-2`}
			>
				<div className="date_wrapper flex flex-col items-center">
					{!isScrolled && (
						<div className="label_date xxxs:hidden">
							<p className="text-sm text-[#4b4b4b] mb-3">
								Enter the start date of your investment
							</p>
						</div>
					)}
					<div
						className={`datepicker w-full text-[#101215]  flex justify-center relative transition-all duration-300 ${
							isScrolled ? 'text-[22px]' : 'text-[32px]'
						} xxxs:text-[20px]`}
					>
						<DatePicker
							selected={date}
							onChange={(date) => setDate(date!)}
							className="w-full text-center m-auto"
						/>
					</div>
				</div>
			</div>
			<div
				className={`right justify-start flex w-2/4 transition-all duration-300 ${
					isScrolled ? 'px-[15px]' : 'p-[25px]'
				} xxxs:justify-center`}
			>
				<div className="savings_wrapper flex flex-col items-center">
					{!isScrolled && (
						<div className="savings_label xxxs:hidden">
							<p className="text-sm text-[#4b4b4b] mb-3">
								Cumulated Impact since savings
							</p>
						</div>
					)}
					<div
						className={`percentage  text-[#006193] flex justify-center relative w-full transition-all duration-300 ${
							isScrolled ? 'text-[22px]' : 'text-[32px]'
						} `}
					>
						{`23%`}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CumulatedImpactTab;

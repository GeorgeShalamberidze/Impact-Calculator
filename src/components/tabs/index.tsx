import CumulatedImpactTab from './cumulated-impact';
import ImpactScoreTab from './impact-score';
import './style.css';
import { useState } from 'react';

const Tabs = () => {
	const [amount, setAmount] = useState<number>(3000);
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (tabIndex: number) => {
		setActiveTab(tabIndex);
	};
	return (
		<div className="tabs_wrapper h-[120px] flex items-center justify-center w-full relative ">
			<div
				className="tab_buttons absolute flex justify-between z-20"
				style={{ top: '-33px' }}
			>
				<div
					className={`button relative w-[150px] h-[33px]  border-t border-r border-l border-solid border-gray-300 text-center ${
						activeTab === 0 ? 'bg-white selected' : 'bg-[#ecf9fd]'
					} flex items-center justify-center cursor-pointer`}
					onClick={() => handleTabClick(0)}
				>
					<p className="text-sm font-bold text-[#262626]">IMPACT SCORE</p>
				</div>
				<div
					className={`button relative w-[150px] h-[33px] border-t border-r border-l border-solid border-gray-300 text-center ${
						activeTab === 1 ? 'bg-white selected' : 'bg-[#ecf9fd]'
					} flex items-center justify-center cursor-pointer`}
					onClick={() => handleTabClick(1)}
				>
					<p className="text-sm font-bold text-[#262626]">CUMULATED IMPACT</p>
				</div>
			</div>
			{activeTab === 0 ? (
				<ImpactScoreTab amount={amount} />
			) : (
				<CumulatedImpactTab />
			)}
		</div>
	);
};

export default Tabs;

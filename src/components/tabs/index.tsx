import useScroll from '@/hooks/useScroll';
import CumulatedImpactTab from './cumulated-impact';
import ImpactScoreTab from './impact-score';
import { useContext } from 'react';
import { CardContext, CardContextType } from '@/context/CardContext';
import { ACTIVE_TAB } from '@/enums/activeTab.enum';
import './style.css';

const Tabs = () => {
	const { activeTab, investment, handleTabClick } = useContext(
		CardContext
	) as CardContextType;
	const { isScrolled } = useScroll();

	return (
		<div
			className={`tabs_wrapper z-40 max-w-[800px] flex-col flex items-center justify-center w-full bg-white ${
				isScrolled
					? 'bg-red-60 fixed top-[58px] h-[90px]'
					: 'relative h-[120px] top-0'
			}`}
		>
			<div
				className={`tab_buttons  flex justify-between top-[-33px] ${
					isScrolled ? 'border-b border-solid border-white' : 'absolute'
				}`}
			>
				<div
					className={`button relative w-[150px] h-[33px]  border-t border-r border-l border-solid border-gray-300 text-center ${
						activeTab === ACTIVE_TAB.IMPACT_SCORE
							? 'bg-white selected'
							: 'bg-[#ecf9fd]'
					} flex items-center justify-center cursor-pointer`}
					onClick={() => handleTabClick(0)}
				>
					<p className="text-sm font-bold text-[#262626]">IMPACT SCORE</p>
				</div>
				<div
					className={`button relative w-[150px] h-[33px] border-t border-r border-l border-solid border-gray-300 text-center ${
						activeTab === ACTIVE_TAB.CUMULATED_IMPACT
							? 'bg-white selected'
							: 'bg-[#ecf9fd]'
					} flex items-center justify-center cursor-pointer`}
					onClick={() => handleTabClick(1)}
				>
					<p className="text-sm font-bold text-[#262626]">CUMULATED IMPACT</p>
				</div>
			</div>
			{activeTab === ACTIVE_TAB.IMPACT_SCORE ? (
				<ImpactScoreTab investment={investment} isScrolled={isScrolled} />
			) : (
				<CumulatedImpactTab isScrolled={isScrolled} />
			)}
		</div>
	);
};

export default Tabs;

import Modal from '@/components/modal';
import { useModal } from '@/hooks/useModal';

const ImpactScoreTab = ({
	investment,
	isScrolled,
}: {
	investment: number;
	isScrolled: boolean;
}) => {
	const { isModalOpen, showModal, handleCancel, handleOk } = useModal();

	return (
		<>
			<div
				className={`impact_animation flex flex-col justify-center items-center transition-all duration-300  ${
					isScrolled &&
					'h-[57px] !w-screen border-t border-b border-solid border-gray-300'
				}`}
			>
				{!isScrolled && (
					<div className="text text-center my-1">
						<p className="text-sm text-[#4b4b4b]">
							Enter the amount you wish to invest
						</p>
					</div>
				)}
				<div
					className={`amount text-[#101215] relative w-[210px] flex text-center justify-center transition-all duration-300 ${
						isScrolled ? 'text-[20px]' : 'text-[32px]'
					}`}
					onClick={showModal}
				>
					{`$${investment.toLocaleString()}`}
				</div>
			</div>
			<Modal
				isModalOpen={isModalOpen}
				handleCancel={handleCancel}
				handleOk={handleOk}
			/>
		</>
	);
};

export default ImpactScoreTab;

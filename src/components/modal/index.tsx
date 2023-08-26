import { GrClose } from 'react-icons/gr';
import { useContext } from 'react';
import { CardContext, CardContextType } from '@/context/CardContext';
import './style.css';

interface ModalPropTypes {
	isModalOpen: boolean;
	handleCancel: () => void;
	handleOk: () => void;
}

const Modal = ({ isModalOpen, handleCancel, handleOk }: ModalPropTypes) => {
	const { investment, handleInvestmentChange } = useContext(
		CardContext
	) as CardContextType;

	return (
		isModalOpen && (
			<div
				className={`overlay w-screen h-screen bg-[#f7f7f7] fixed top-0 bottom-0 left-0 right-0 pointer-events-auto`}
			>
				<div className="modal flex flex-col items-center justify-center absolute left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%]">
					<div
						className={`text-lg text-[#4b4b4b] mb-5 ${
							isModalOpen && 'text_modal_animation'
						} xxxs:text-sm`}
					>
						Enter the amount you wish to invest
					</div>
					<div
						className={`relative w-[420px] transition-all duration-300 ${
							isModalOpen ? 'animate-modal-input' : ''
						} xxxs:w-[280px]`}
					>
						<input
							onChange={(e) => handleInvestmentChange(e)}
							type="number"
							value={investment}
							className="no-spin w-full h-[88.8px] text-[76px] text-[#101215] text-center bg-transparent border border-solid border-[#b9bdc4]"
						/>
					</div>
					<div
						className={`${
							isModalOpen && 'input_info_animation'
						} text-sm text-[#4b4b4b] text-right self-end leading-[2.31] font-semibold`}
					>
						Hit the enter key or ESC to close
					</div>

					<div
						className={`${
							isModalOpen && 'submit_button_animation'
						} h-12 flex items-center justify-center bg-[#d14905] px-[22px] text-white cursor-pointer mt-[70px]`}
						onClick={handleOk}
					>
						REVIEW YOUR IMPACT SCORE
					</div>
				</div>
				<div
					className="close border border-solid border-gray-400 w-fit absolute right-10 top-5 cursor-pointer p-2"
					onClick={handleCancel}
				>
					<GrClose size={30} style={{ color: 'red' }} />
				</div>
			</div>
		)
	);
};

export default Modal;

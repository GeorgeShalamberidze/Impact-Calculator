import { AiOutlineRight } from 'react-icons/ai';
import GlobalGoals from '@/assets/images/global-goals.png';
import PriPrinciples from '@/assets/images/pri-principles.png';

const Footer = () => {
	return (
		<div className="footer_wrapper">
			<div className="text py-5 px-10 border-b-2 border-solid border-gray-200 ">
				<p className="text-lg flex gap-1">
					<span>
						Want to play a part into our future?{' '}
						<a href="#" className="text-[#1a6694] ">
							Invest in the FF Sustainable Water & Waste Fund{' '}
							<span className="inline-block h-[14px]">
								<AiOutlineRight size={17} />
							</span>
						</a>
					</span>
				</p>
			</div>
			<div className="logos px-10 flex items-center h-32 sm-max:flex-col justify-evenly">
				<img
					src={GlobalGoals}
					alt="global goals company"
					className="w-[197px] h-[53px] mr-[50px]"
				/>
				<img
					src={PriPrinciples}
					alt="pri principles company"
					className="w-[170px] h-[32px]"
				/>
			</div>
		</div>
	);
};

export default Footer;

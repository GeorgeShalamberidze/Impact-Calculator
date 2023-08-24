import Fidelity from '@/assets/svg/fidelity.svg';
import { useState, useEffect } from 'react';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	const handleScroll = () => {
		window.scrollY > 10 ? setIsScrolled(true) : setIsScrolled(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="wrapper fixed w-full top-0 left-0 z-50 bg-white transition duration-300">
			<div
				className={`header m-auto max-w-[800px] px-10 flex items-center transition-all duration-300 ${
					isScrolled ? 'h-[85px]' : 'h-[100px]'
				}`}
			>
				<div
					className={`logo flex h-[46.7px] transition-all duration-300 ${
						isScrolled ? 'w-[100px]' : 'w-[156px]'
					}`}
				>
					<img src={Fidelity} alt="Fidelity" />
				</div>
			</div>
		</div>
	);
};

export default Header;

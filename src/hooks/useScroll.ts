import { useState, useEffect } from 'react';

const useScroll = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	const handleScroll = () => {
		window.scrollY > 300 ? setIsScrolled(true) : setIsScrolled(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return {
		isScrolled,
	};
};

export default useScroll;

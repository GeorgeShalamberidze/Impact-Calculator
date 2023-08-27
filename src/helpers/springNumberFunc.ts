import { useSpring } from 'react-spring';
export const springNumberFunc = (val: number) => {
	const { number } = useSpring({
		from: { number: 0 },
		number: val,
		delay: 50,
		config: { mass: 1, tension: 120, friction: 17 },
	});

	return {
		number,
	};
};

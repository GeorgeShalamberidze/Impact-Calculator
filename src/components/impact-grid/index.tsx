import ImpactCard from './impact-card';
import './style.css';

const ImpactGrid = () => {
	return (
		<div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 pt-[30px] pr-[30px] pb-[35px] pl-[40px] justify-center items-center">
			<ImpactCard />
			<ImpactCard />
			<ImpactCard />
			<ImpactCard />
			<ImpactCard />
			<ImpactCard />
			<ImpactCard />
		</div>
	);
};

export default ImpactGrid;

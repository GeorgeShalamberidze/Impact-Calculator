import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import ImpactGrid from './components/impact-grid';
import Tabs from './components/tabs';
import { useEffect, useState } from 'react';
import { CardType } from './types/CardType';
import axios from 'axios';

const App = () => {
	const [data, setData] = useState<CardType[]>();

	useEffect(() => {
		axios
			.get<CardType[]>('src/assets/json/data.json')
			.then((res) => setData(res.data));
	}, []);

	return (
		<>
			<div className="app_wrapper w-full max-w-[800px] m-auto">
				<Header />
				<Hero />
				<Tabs />
				<ImpactGrid cardData={data} />
				<Footer />
			</div>
		</>
	);
};

export default App;

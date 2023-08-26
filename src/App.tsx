import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import ImpactGrid from './components/impact-grid';
import Tabs from './components/tabs';

const App = () => {
	return (
		<>
			<div className="app_wrapper w-full max-w-[800px] m-auto">
				<Header />
				<Hero />
				<Tabs />
				<ImpactGrid />
				<Footer />
			</div>
		</>
	);
};

export default App;

import './style.css';

const Hero = () => {
	return (
		<div className="hero relative m-auto w-full max-w-[800px] flex items-center bg-[url('/assets/images/hero-bg.jpg')] h-[295px] bg-right">
			<div className="z-10 max-w-[648px] py-10 px-[50px] text-white xxs:py-5 xxs:px-5">
				<h1 className="leading-[0.98] text-[48px] w-full mb-5 xxs:text-[32px]">
					FF Sustainable Water & Waste Fund
				</h1>
				<div className="max-w-[399px]">
					<p>
						See what a positive impact investing in the fund can have over the
						future of our environment.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;

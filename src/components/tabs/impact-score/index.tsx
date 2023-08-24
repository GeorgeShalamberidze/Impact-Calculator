const ImpactScoreTab = ({ amount }: { amount: number }) => {
	return (
		<div className="container flex flex-col items-center">
			<div className="text text-center my-5">
				<p className="text-sm" style={{ color: '#4b4b4b' }}>
					Enter the amount you wish to invest
				</p>
			</div>
			<div
				className="amount relative text-[32px] w-[210px] flex text-center justify-center"
				style={{ color: '#101215' }}
				onClick={() => console.log('MODAL CLICKED!!!')}
			>
				{`$${amount.toLocaleString()}`}
			</div>
		</div>
	);
};

export default ImpactScoreTab;

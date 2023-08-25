const ImpactScoreTab = ({
	amount,
	isScrolled,
}: {
	amount: number;
	isScrolled: boolean;
}) => {
	return (
		<div
			className={`container flex flex-col justify-center items-center transition-all duration-300  ${
				isScrolled
					? 'h-[57px] w-screen border-t border-b border-solid border-gray-300 '
					: ''
			}`}
		>
			{!isScrolled && (
				<div className="text text-center my-5">
					<p className="text-sm" style={{ color: '#4b4b4b' }}>
						Enter the amount you wish to invest
					</p>
				</div>
			)}
			<div
				className={`amount text-[#101215] relative w-[210px] flex text-center justify-center transition-all duration-300 ${
					isScrolled ? 'text-[20px]' : 'text-[32px]'
				}`}
				onClick={() => console.log('MODAL CLICKED!!!')}
			>
				{`$${amount.toLocaleString()}`}
			</div>
		</div>
	);
};

export default ImpactScoreTab;

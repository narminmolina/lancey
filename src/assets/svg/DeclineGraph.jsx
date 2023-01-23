const DeclineGraph = props => (
	<svg width={131} height={66} fill="none" {...props}>
		<path fill="#FEF3F2" d="M1.667 1C22.463 2.733 23.75 44.222 44.333 49 61.307 52.94 69.901 30.574 87 33c18.546 2.632 24.481 25.938 42.667 32h-128V1Z" />
		<path fill="url(#a)" d="M1.667 1C22.463 2.733 23.75 44.222 44.333 49 61.307 52.94 69.901 30.574 87 33c18.546 2.632 24.481 25.938 42.667 32h-128V1Z" />
		<path
			stroke="#F04438"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M129.667 65C111.481 58.938 105.546 35.632 87 33c-17.099-2.426-25.694 19.94-42.667 16C23.75 44.222 22.463 2.733 1.667 1"
		/>
		<defs>
			<linearGradient id="a" x1={65.667} x2={65.667} y1={1} y2={65} gradientUnits="userSpaceOnUse">
				<stop offset={0.641} stopColor="#fff" stopOpacity={0} />
				<stop offset={1} stopColor="#fff" />
			</linearGradient>
		</defs>
	</svg>
);

export default DeclineGraph;

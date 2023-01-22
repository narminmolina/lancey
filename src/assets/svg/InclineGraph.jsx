export const InclineGraph = props => (
	<svg width={131} height={66} fill="none" {...props}>
		<path fill="#ECFDF3" d="M129.333 1c-20.796 1.733-22.083 43.222-42.666 48C69.694 52.94 61.099 30.574 44 33 25.454 35.632 19.519 58.938 1.333 65h128V1Z" />
		<path fill="url(#a)" d="M129.333 1c-20.796 1.733-22.083 43.222-42.666 48C69.694 52.94 61.099 30.574 44 33 25.454 35.632 19.519 58.938 1.333 65h128V1Z" />
		<path
			stroke="#12B76A"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M1.333 65C19.52 58.938 25.453 35.632 44 33c17.099-2.426 25.694 19.94 42.667 16 20.583-4.778 21.87-46.267 42.666-48"
		/>
		<defs>
			<linearGradient id="a" x1={65.333} x2={65.333} y1={1} y2={65} gradientUnits="userSpaceOnUse">
				<stop offset={0.641} stopColor="#fff" stopOpacity={0} />
				<stop offset={1} stopColor="#fff" />
			</linearGradient>
		</defs>
	</svg>
);

import 'styles/components/User.css';

export const User = () => {
	return (
		<div className="user-container">
			<img
				className="avatar"
				src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg?auto=format&h=200"
				alt="Narmin Molina"
			/>
			<a href="/" title="To User account">
				Narmin Molina <em>narmin@lancey.io</em>
			</a>
			<button>
				<svg width={20} height={20} fill="none">
					<path
						stroke="#98A2B3"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.67}
						d="M7.5 17.5H4.167A1.667 1.667 0 0 1 2.5 15.833V4.167A1.667 1.667 0 0 1 4.167 2.5H7.5m5.833 11.667L17.5 10m0 0-4.167-4.167M17.5 10h-10"
					/>
				</svg>
			</button>
		</div>
	);
};

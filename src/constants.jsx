export const navItems = [
	{
		title: 'Home',
		link: '/',
		icon: (
			<svg width={24} height={25} fill="none">
				<path
					stroke="#D0D5DD"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 22.945v-10h6v10m-12-13 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11Z"
				/>
			</svg>
		),
	},
	{
		title: 'Dashboard',
		link: '/dashboard',
		icon: (
			<svg width={24} height={25} fill="none">
				<path stroke="#D0D5DD" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 20.945v-10m-6 10v-16m-6 16v-6" />
			</svg>
		),
	},
	{
		title: 'Projects',
		link: '/projects',
		icon: (
			<svg width="24" height="25" fill="none">
				<path
					stroke="#D0D5DD"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="m2 17.945 10 5 10-5m-20-5 10 5 10-5m-10-10-10 5 10 5 10-5-10-5Z"
				/>
			</svg>
		),
	},
	{
		title: 'Tasks',
		link: '/tasks',
		icon: (
			<svg width={24} height={25} fill="none">
				<path
					stroke="#D0D5DD"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="m9 11.945 3 3 10-10m-1 8v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h11"
				/>
			</svg>
		),
	},
	{
		title: 'Reporting',
		link: '/reporting',
		icon: (
			<svg width={24} height={25} fill="none">
				<path
					stroke="#D0D5DD"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M4 15.945s1-1 4-1 5 2 8 2 4-1 4-1v-12s-1 1-4 1-5-2-8-2-4 1-4 1v12Zm0 0v7"
				/>
			</svg>
		),
	},
	{
		title: 'Users',
		link: '/users',
		icon: (
			<svg width={24} height={25} fill="none">
				<path
					stroke="#D0D5DD"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M17 21.945v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m22 0v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75m-3-3.88a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
				/>
			</svg>
		),
	},
	{
		title: 'Support',
		link: '/support',
		icon: (
			<svg width={24} height={24} fill="none">
				<path stroke="#D0D5DD" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 20V10m-6 10V4M6 20v-6" />
			</svg>
		),
	},
	{
		title: 'Settings',
		link: '/settings',
		icon: (
			<svg width={24} height={24} fill="none">
				<g stroke="#D0D5DD" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} clipPath="url(#a)">
					<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
					<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a1.998 1.998 0 0 1 0 2.83 1.998 1.998 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a1.998 1.998 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 3.417 1.415 2 2 0 0 1-.587 1.415l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
				</g>
				<defs>
					<clipPath id="a">
						<path fill="#fff" d="M0 0h24v24H0z" />
					</clipPath>
				</defs>
			</svg>
		),
	},
];

export const dashboardStatistics = [
	{
		title: 'Total customers',
		value: 2420,
		isIncreased: true,
		percentage: '40%',
	},
];

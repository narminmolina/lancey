import catalog from 'assets/logos/catalog.webp';
import circooles from 'assets/logos/circooles.webp';
import commandR from 'assets/logos/commandR.webp';
import hourglass from 'assets/logos/hourglass.webp';
import layers from 'assets/logos/layers.webp';
import quotient from 'assets/logos/quotient.webp';
import sisyphus from 'assets/logos/sisyphus.webp';

export const navItems = [
	{
		title: 'Home',
		src: '',
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
		src: '',
		link: '/dashboard',
		icon: (
			<svg width={24} height={25} fill="none">
				<path
					stroke="#D0D5DD"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M18 20.945v-10m-6 10v-16m-6 16v-6"
				/>
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
				<path
					stroke="#D0D5DD"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M18 20V10m-6 10V4M6 20v-6"
				/>
			</svg>
		),
	},
	{
		title: 'Settings',
		link: '/settings',
		icon: (
			<svg width={24} height={24} fill="none">
				<g
					stroke="#D0D5DD"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					clipPath="url(#a)"
				>
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
	{
		title: 'Members',
		value: 1210,
		isIncreased: false,
		percentage: '10%',
	},
	{
		title: 'Active now',
		value: 316,
		isIncreased: true,
		percentage: '20%',
	},
];

export const companies = [
	{
		company: {
			title: 'Catalog',
			url: 'catalog.io',
			src: catalog,
		},
		usage: '80',
		status: 'Customer',
		product: {
			title: 'Content curating app',
			about: 'Brings all your news into one place',
		},
		key: '0f8fad5b-d9cb-469f-a165-70867728950e',
	},
	{
		company: {
			title: 'Circooles',
			src: circooles,
			url: 'getcircooles.com',
		},
		usage: '70',
		status: 'Churned',
		product: {
			title: 'Design Software',
			about: 'Super lightweight design app',
		},
		key: '1e8e1d7a-2e55-4f3d-9f89-3b1b1b6b6327',
	},
	{
		company: {
			title: 'Command+R',
			src: commandR,
			url: 'cmdr.ai',
		},
		usage: '30',
		status: 'Customer',
		product: {
			title: 'Data prediction',
			about: 'AI and machine learning data',
		},
		key: '2d7d0c99-3c44-5e22-8e78-4a0a0a5a5236',
	},
	{
		company: {
			title: 'Hourglass',
			src: hourglass,
			url: 'hourglass.app',
		},
		usage: '85',
		status: 'Customer',
		product: {
			title: 'Productivity app',
			about: 'Time management and productivity app',
		},
		key: '3c6c1bb8-4b33-6f11-7d67-59f9f9494245',
	},
	{
		company: {
			title: 'Layers',
			src: layers,
			url: 'getlayers.io',
		},
		usage: '40',
		status: 'Churned',
		product: { title: 'Web app integrations', about: 'Connect web apps seamlessly' },
		key: '4b5b2ad7-5a22-7e00-6c56-68e8e83a3154',
	},
	{
		company: {
			title: 'Quotient',
			src: quotient,
			url: 'quotient.co',
		},

		usage: '20',
		status: 'Customer',
		product: {
			title: 'Sales CRM',
			about: 'Web-based sales doc management',
		},
		key: '5a4a39f6-6911-8f11-5b45-77d7d7292b63',
	},
	{
		company: {
			title: 'Sisyphus',
			src: sisyphus,
			url: 'sisyphus.com',
		},
		usage: '50',
		status: 'Customer',
		product: { title: 'Automation and workflow', about: 'Time tracking, invoicing and expenses' },
		key: '693a48d5-7800-9e00-4a34-86c6c6182a72',
	},
	{
		company: {
			title: 'News Hub',
			src: catalog,
			url: 'newshub.io',
		},
		usage: '15',
		status: 'Churned',
		product: {
			title: 'News aggregation platform',
			about: 'Easily discover and read the latest news',
		},
		key: '782a57b4-86ef-adff-3923-95b5b5071a81',
	},
	{
		company: {
			title: 'Content Central',
			src: circooles,
			url: 'contentcentral.com',
		},
		usage: '65',
		status: 'Customer',
		product: {
			title: 'Content management system',
			about: 'Streamline your content creation process',
		},
		key: 'a5ea8451-b3bc-decd-05f0-c2c2c1e3e7ee',
	},
	{
		company: {
			title: 'My News',
			src: commandR,
			url: 'mynews.app',
		},
		usage: '10',
		status: 'Churned',
		product: {
			title: 'Personalized news feed app',
			about: 'Get the news that matters most to you',
		},
		key: '871a6693-95de-bcee-2812-a4a4a3f60910',
	},
	{
		company: {
			title: 'Times News',
			src: hourglass,
			url: 'timesnews.app',
		},
		usage: '50',
		status: 'Customer',
		product: {
			title: 'Personalized news feed app',
			about: 'Get the news that matters most to you',
		},
		key: '96fa7572-a4cd-cddd-1701-b3b3b2f4f8ff',
	},
];

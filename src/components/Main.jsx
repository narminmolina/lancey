import { Button } from 'antd';

import { Table } from 'components/Table';

import AddIcon from 'assets/svg/AddIcon';
import ArrowIcon from 'assets/svg/ArrowIcon';
import { ImportIcon } from 'assets/svg/ImportIcon';
import { InclineGraph } from 'assets/svg/InclineGraph';
import DeclineGraph from 'assets/svg/DeclineGraph';

import { dashboardStatistics } from '../constants';

import 'styles/components/Main.css';

export const Main = () => {
	return (
		<main className="home-page-main">
			<header>
				<div className="header-content">
					<h1>Welcome back, Narmin</h1>
					<p>Track, manage and forecast your customers and orders.</p>
				</div>
				<div className="button-wrapper">
					<Button type="default" size="middle" icon={<ImportIcon />}>
						Import
					</Button>
					<Button type="primary" size="middle" icon={<AddIcon />}>
						Add
					</Button>
				</div>
			</header>
			<section className="statistics-wrapper">
				{dashboardStatistics.map(({ title, value, isIncreased, percentage }) => (
					<div className="statistic-box" key={title}>
						<div className="statistic-title">
							<h1>{title}</h1>
							<button className="dots-button">
								<svg width={20} height={20} fill="none">
									<path
										stroke="#98A2B3"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.667}
										d="M10.333 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Zm0-5.833a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Zm0 11.667a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"
									/>
								</svg>
							</button>
						</div>
						<div className="statistic-info">
							<p>
								<strong>{new Intl.NumberFormat().format(value)}</strong>
								<em>
									<span className={isIncreased ? 'incline' : 'decline'}>
										<ArrowIcon stroke={isIncreased ? '#12B76A' : '#b42318'} style={{ transform: isIncreased ? undefined : `rotate(180deg)` }} />
										{percentage}
									</span>
									vs last month
								</em>
							</p>
							{isIncreased ? <InclineGraph /> : <DeclineGraph />}
						</div>
					</div>
				))}
			</section>
			<Table />
		</main>
	);
};

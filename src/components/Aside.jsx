import { Input } from 'antd';

import { User } from 'components/User';
import { Logo } from 'components/Logo';
import { SpaceAlert } from 'components/SpaceAlert';

import { SearchIcon } from 'assets/svg/SearchIcon';

import { navItems } from '../constants';

import 'styles/components/Aside.css';

export const Aside = () => {
	return (
		<aside className="aside">
			<a href="/" title="Link to home page">
				<Logo />
			</a>
			<Input className="search-input" size="large" placeholder="Search" prefix={<SearchIcon />} />
			<nav>
				<ul className="nav-list">
					{navItems.map(({ title, link, icon }, index) => (
						<li key={index}>
							<a href={link} title={title}>
								<span className="nav-icon">{icon}</span>
								{title}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<SpaceAlert />
			<User />
		</aside>
	);
};

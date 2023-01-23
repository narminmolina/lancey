import React from 'react';

import { Main } from 'components/Main';
import { Aside } from 'components/Aside';

export const App = () => (
	<div className="container">
		<div className="home-page">
			<Aside />
			<Main />
		</div>
	</div>
);

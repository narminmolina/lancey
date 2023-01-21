import { Progress } from 'antd';

import 'styles/components/SpaceAlert.css';

export const SpaceAlert = () => {
	return (
		<div className="space-alert-box">
			<Progress type="circle" percent={80} strokeWidth={8} width={65} strokeColor="#F2F4F7" trailColor="#475467" className="progress" />
			<p>
				<strong>Used space</strong>
				Your team has used 80% of your available space. Need more?
			</p>
			<div className="button-container">
				<button>Dismiss</button>
				<button>Upgrade plan</button>
			</div>
		</div>
	);
};

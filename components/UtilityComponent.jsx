import React, { useEffect, useState } from 'react';
import Whal3s, { NftValidationUtility } from '@whal3s/whal3s.js';

const UtilityComponent = () => {
	const [utility, setUtility] = useState(undefined);
	const [step, setStep] = useState(undefined);

	const init = async () => {
		const whal3s = new Whal3s();
		const _utility = await whal3s.createValidationUtility(
			process.env.WHAL3S_UTILITY_ID
		);
		_utility.addEventListener('stepChanged', () => {
			setStep(_utility.step);
		});
		setStep(_utility.step);
		setUtility(_utility);
	};

	useEffect(() => {
		init();
	}, []);

	return (
		<div>
			<h1>Utility Component</h1>
		</div>
	);
};

export default UtilityComponent;

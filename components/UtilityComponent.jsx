import React, { useEffect, useState } from 'react';
import Whal3s, { NftValidationUtility } from '@whal3s/whal3s.js';
import { useAccount } from 'wagmi';

const UtilityComponent = () => {
	const [utility, setUtility] = useState(undefined);
	const [step, setStep] = useState(undefined);

	const account = useAccount({
		onConnect({ address, connector, isReconnected }) {
			setStep(NftValidationUtility.STEP_WALLET_CONNECTED);
		},
		onDisconnect() {
			setStep(NftValidationUtility.STEP_INITIALIZED);
		},
	});

	const init = async () => {
		const whal3s = new Whal3s();
		const _utility = await whal3s.createValidationUtility(
			'07ea7578-1950-43a9-92c2-9696fdf2058d'
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
			{step === NftValidationUtility.STEP_WALLET_CONNECTED && <h1>Hii</h1>}
		</div>
	);
};

export default UtilityComponent;

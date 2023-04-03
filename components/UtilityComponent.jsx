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

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			authorization: `Bearer ${process.env.BEARER_TOKEN}`,
		},
	};

	const fetchWalletNFTs = async () => {
		console.log(account.address);
		const nfts = await fetch(
			`https://app.whal3s.xyz/api/v0/nft-validation-utilities/07ea7578-1950-43a9-92c2-9696fdf2058d/wallet/${account.address}
`,
			options
		);
		const res = await nfts.json();
		if (res.valid === true) {
			setStep(NftValidationUtility.STEP_CLAIMED);
		} else setStep(NftValidationUtility.STEP_NFTS_FETCHED);
	};

	useEffect(() => {
		init();
		fetchWalletNFTs();
	}, []);

	return (
		<div>{step === NftValidationUtility.STEP_CLAIMED && <h1>Hii</h1>}</div>
	);
};

export default UtilityComponent;

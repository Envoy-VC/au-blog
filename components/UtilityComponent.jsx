import React, { useEffect, useState } from 'react';
import Whal3s, { NftValidationUtility } from '@whal3s/whal3s.js';
import { useAccount, useConnect } from 'wagmi';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

import { SubmitForm } from '.';

const UtilityComponent = ({ id }) => {
	const [utility, setUtility] = useState(undefined);
	const [step, setStep] = useState(NftValidationUtility.STEP_NFTS_FETCHED);

	const account = useAccount({
		onConnect({ address, connector, isConnecting }) {
			if (isConnecting) fetchWalletNFTs();
		},
		onDisconnect() {
			setStep(NftValidationUtility.STEP_NFTS_FETCHED);
		},
	});

	const init = async () => {
		const whal3s = new Whal3s();
		const _utility = await whal3s.createValidationUtility(
			'07ea7578-1950-43a9-92c2-9696fdf2058d'
		);
		setStep(NftValidationUtility.STEP_INITIALIZED);
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
		console.log(res.valid);
		if (res.valid === true) {
			setStep(NftValidationUtility.STEP_CLAIMED);
		} else if (res.valid === false) {
			setStep(NftValidationUtility.STEP_NFTS_FETCHED);
		} else if (res.valid === undefined) {
			setStep(NftValidationUtility.STEP_NFTS_FETCHED);
		}
	};

	useEffect(() => {
		init();
		fetchWalletNFTs();
	}, []);

	const formWrapper = ({ children }) => {
		return (
			<div className='px-4 py-16 sm:px-6 lg:px-8 bg-gray-200 rounded-lg shadow-lg lg:mx-8 mx-0 h-[600px]'>
				{children}
			</div>
		);
	};

	const Form = () => (
		<div className='px-4 py-16 sm:px-6 lg:px-8 bg-gray-200 rounded-lg shadow-lg lg:mx-8 mx-0 h-[600px]'>
			<div className='mt-4 text-[#020202] text-2xl sm:text-[36px] font-neueMontreal font-extrabold leading-[54px]'>
				Alchemy University Early Access Pass not found
			</div>
			<img
				src='https://pbs.twimg.com/media/FsD_SmYWAAUMBcY.png'
				alt='au-pass'
				className='w-[300px] h-[300px] mt-8 rounded-sm mx-auto '
			/>
		</div>
	);

	return (
		<div>
			{(step === NftValidationUtility.STEP_UNINITIALIZED ||
				step === NftValidationUtility.STEP_INITIALIZED) && (
				<Skeleton wrapper={formWrapper} />
			)}
			{step === NftValidationUtility.STEP_NFTS_FETCHED && <Form />}
			{step === NftValidationUtility.STEP_CLAIMED && <SubmitForm id={id} />}
		</div>
	);
};

export default UtilityComponent;

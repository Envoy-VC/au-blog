import React, { useState, useEffect } from 'react';
import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';

import { ContestCard } from '@/components';
import { GET_CONTESTS } from '@/utils/query';

const BrowseContests = () => {
	const [contests, setContests] = useState([]);
	useEffect(() => {
		const hygraph = new GraphQLClient(
			'https://api-ap-south-1.hygraph.com/v2/clg14kh35843801un41i6e6tb/master'
		);

		const fetchContests = async () => {
			const today = new Date();
			const query = GET_CONTESTS(today.toISOString());
			const gqlQuery = gql`
				${query}
			`;
			const { contests } = await hygraph.request(gqlQuery);
			setContests(contests);
		};
		fetchContests();
	}, []);

	return (
		<section className='bg-white text-black'>
			<div className='mx-auto max-w-screen-2xl px-4 py-16 mt-12 lg:flex lg:items-center'>
				<div>
					<div className='mx-auto text-center'>
						<span className='bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent text-[20px] font-neueMontrealRegular font-semibold tracking-widest'>
							[ contests ]
						</span>
						<div class='mt-4 text-[#020202] text-4xl sm:text-[54px] font-neueMontreal font-extrabold leading-[54px]'>
							Explore Ongoing Contests
						</div>
					</div>
					<div className='mt-16 flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap'>
						{contests.map((contest, index) => (
							<ContestCard key={index} contest={contest} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default BrowseContests;

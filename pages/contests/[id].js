import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';

import { Navbar, Footer } from '@/components';
import { ContestPage } from '@/sections/Contests';
import { GET_CONTEST } from '@/utils/query';

const Contests = () => {
	const router = useRouter();
	const { id } = router.query;

	const [contest, setContest] = useState([]);

	useEffect(() => {
		const hygraph = new GraphQLClient(
			'https://api-ap-south-1.hygraph.com/v2/clg14kh35843801un41i6e6tb/master'
		);

		const fetchContest = async () => {
			const query = GET_CONTEST(id);
			const gqlQuery = gql`
				${query}
			`;
			const contest = await hygraph.request(gqlQuery);
			setContest(contest.contests[0]);
		};
		// fetchContest();
	}, []);
	return (
		<div>
			<Navbar />
			<ContestPage />
			<Footer />
		</div>
	);
};

export default Contests;

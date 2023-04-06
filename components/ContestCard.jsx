import React, { useState, useEffect } from 'react';

import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';

import Skeleton from 'react-loading-skeleton';

import { GET_CONTEST } from '@/utils/query';

import 'react-loading-skeleton/dist/skeleton.css';

const ContestCard = ({ id }) => {
	const [contest, setContest] = useState([]);
	useEffect(() => {
		const hygraph = new GraphQLClient(
			'https://api-ap-south-1.hygraph.com/v2/clg14kh35843801un41i6e6tb/master'
		);

		const fetchContest = async () => {
			const today = new Date();
			const query = GET_CONTEST(id);
			const gqlQuery = gql`
				${query}
			`;
			const contest = await hygraph.request(gqlQuery);
			setContest(contest.contests[0]);
		};
		fetchContest();
	}, []);

	const Box = ({ children }) => {
		return <div className='w-[80vw] sm:w-[500px]'>{children}</div>;
	};

	return (
		<div className='rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[5px] shadow-xl'>
			<a target='_blank' rel='noreferrer'>
				<div className='bg-white max-w-xl relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 shadow-sm'>
					<div className='sm:flex sm:justify-between sm:gap-4'>
						<div>
							<h3 className='text-lg font-bold text-gray-900 sm:text-xl'>
								{contest.title || <Skeleton wrapper={Box} />}
							</h3>

							<p className='mt-1 text-xs font-medium text-gray-600'>
								{contest.title ? (
									contest.category.replace(/_/g, ' ')
								) : (
									<Skeleton />
								)}
							</p>
						</div>
					</div>

					<div className='mt-4'>
						<p className='text-sm text-gray-500'>
							{contest.description || <Skeleton count={3} />}
						</p>
					</div>

					<div className='mt-6 flex gap-4 sm:gap-6'>
						<div className='flex flex-col-reverse'>
							<dd className='text-xs text-gray-500'>
								{new Date(contest.startDate).toUTCString() || <Skeleton />}
							</dd>
							<dt className='text-sm font-medium text-gray-600'>
								{contest.title ? 'Start Date' : <Skeleton />}
							</dt>
						</div>

						<div className='flex flex-col-reverse'>
							<dd className='text-xs text-gray-500'>
								{new Date(contest.endDate).toUTCString() || <Skeleton />}
							</dd>
							<dt className='text-sm font-medium text-gray-600'>
								{contest.title ? 'End Date' : <Skeleton />}
							</dt>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default ContestCard;

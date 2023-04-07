import React, { useState, useEffect } from 'react';

import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';

import Skeleton from 'react-loading-skeleton';

import { ContestDetail, DynamicUtilityComponent } from '@/components';

import { GET_CONTEST } from '@/utils/query';

import 'react-loading-skeleton/dist/skeleton.css';

const ContestDetails = ({ id }) => {
	return (
		<section className='bg-white text-black'>
			<div className='mx-auto max-w-screen-2xl px-4 py-16 mt-12'>
				<div className='mx-auto'>
					<div className='flex flex-col lg:flex-row justify-center'>
						<div className='w-full basis-2/3 '>
							<ContestDetail id={id} />
						</div>
						<div className='w-full basis-1/3 text-center my-8 lg:my-0'>
							{id && <DynamicUtilityComponent id={id} />}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContestDetails;

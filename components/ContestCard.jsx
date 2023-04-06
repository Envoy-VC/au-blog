import React from 'react';

const ContestCard = ({ contest }) => {
	return (
		<div className='rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[5px] shadow-xl'>
			<a href={`/contests/${contest.id}`} target='_blank' rel='noreferrer'>
				<div className='bg-white max-w-xl relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 shadow-sm'>
					<div className='sm:flex sm:justify-between sm:gap-4'>
						<div>
							<h3 className='text-lg font-bold text-gray-900 sm:text-xl'>
								{contest.title}
							</h3>

							<p className='mt-1 text-xs font-medium text-gray-600'>
								{contest.category.replace(/_/g, ' ')}
							</p>
						</div>
					</div>

					<div className='mt-4'>
						<p className='text-sm text-gray-500'>{contest.description}</p>
					</div>

					<div className='mt-6 flex gap-4 sm:gap-6'>
						<div className='flex flex-col-reverse'>
							<dd className='text-xs text-gray-500'>
								{new Date(contest.startDate).toUTCString()}
							</dd>
							<dt className='text-sm font-medium text-gray-600'>Start Date</dt>
						</div>

						<div className='flex flex-col-reverse'>
							<dd className='text-xs text-gray-500'>
								{new Date(contest.endDate).toUTCString()}
							</dd>
							<dt className='text-sm font-medium text-gray-600'>End Date</dt>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default ContestCard;

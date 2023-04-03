import React from 'react';

const FAQCard = ({ question, answer }) => {
	return (
		<div className='space-y-4 w-full max-w-xl'>
			<details
				className='group [&_summary::-webkit-details-marker]:hidden'
				closed
			>
				<summary className='flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50'>
					<h2 className='font-medium text-gray-900'>{question}</h2>

					<svg
						className='ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M19 9l-7 7-7-7'
						/>
					</svg>
				</summary>

				<p className='px-4 mt-4 leading-relaxed text-gray-700 text-start opacity-0 group-open:opacity-100 transition-opacity duration-300'>
					{answer}
				</p>
			</details>
		</div>
	);
};

export default FAQCard;

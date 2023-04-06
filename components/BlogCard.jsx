/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';

import { GET_ARTICLE } from '@/utils/query';
import { publicationDomain } from '../constants';

import 'react-loading-skeleton/dist/skeleton.css';

const BlogCard = ({ slug }) => {
	const [article, setArticle] = useState([]);

	const fetchArticle = async () => {
		const variables = { slug: slug };
		const data = await fetch('https://api.hashnode.com/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: GET_ARTICLE,
				variables,
			}),
		});
		const res = await data.json();
		console.log(res);
		setArticle(res.data.post);
	};

	useEffect(() => {
		fetchArticle();
	}, []);

	const Box = ({ children }) => {
		return (
			<div className='min-w-[500px] sm:min-w-[80vw] md:min-w-[60vw] lg:min-w-[475px]'>
				{children}
			</div>
		);
	};

	return (
		<article class='transition-all hover:scale-[103%] overflow-hidden rounded-lg border border-gray-100 shadow-sm max-w-[500px] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[475px] min-h-[475px]'>
			{article.coverImage ? (
				<Image
					alt='Blog Card'
					src={article.coverImage}
					width={500}
					height={224}
					class='h-56 w-full object-cover'
				/>
			) : (
				<Skeleton wrapper={Box} height={224} />
			)}

			<div class='p-4 sm:p-6'>
				<a href='#'>
					<h3 class='text-lg font-medium text-gray-900'>
						{article.title || <Skeleton />}
					</h3>
				</a>

				<p class='mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3'>
					{article.brief || <Skeleton count={3} />}
				</p>

				<a
					href={`${publicationDomain}${slug}`}
					target='_blank'
					rel='noreferrer'
					class='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600'
				>
					<span
						aria-hidden='true'
						class='block transition group-hover:translate-x-0.5'
					>
						{article.title ? `Read out More →` : <Skeleton />}
					</span>
				</a>
			</div>
		</article>
	);
};

export default BlogCard;

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const BlogCard = ({ coverImage, title, brief, slug }) => {
	return (
		<article class='transition-all hover:scale-[103%] overflow-hidden rounded-lg border border-gray-100 shadow-sm'>
			<Image
				alt='Blog Card'
				src={coverImage}
				width={500}
				height={224}
				class='h-56 w-full md:object-contain object-cover'
			/>

			<div class='p-4 sm:p-6'>
				<a href='#'>
					<h3 class='text-lg font-medium text-gray-900'>{title}</h3>
				</a>

				<p class='mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3'>
					{brief.slice(0, 130) + '...'}
				</p>

				<a
					href='#'
					class='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600'
				>
					Find out more
					<span
						aria-hidden='true'
						class='block transition group-hover:translate-x-0.5'
					>
						&rarr;
					</span>
				</a>
			</div>
		</article>
	);
};

export default BlogCard;

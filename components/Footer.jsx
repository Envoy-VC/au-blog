/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Image from 'next/image';
import { footerLinks, footerImages } from '@/constants';

import alchemyLogo from '../assets/alchemy-logo.png';

const Footer = () => {
	return (
		<footer aria-label='Site Footer' className='bg-black'>
			<div className='mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8'>
				<div className='flex justify-center items-center text-gray-100 font-neueMontreal text-[36px] gap-2 mx-auto text-center'>
					<Image
						src={alchemyLogo}
						alt='Alchemy Logo'
						classNameName='sm:flex hidden w-8 h-8 mx-1'
					/>
					Alchemy University
				</div>

				<p className='mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-300'>
					Join the Web3 writing revolution and showcase your skills with the
					Alchemy University Tech Writers Guild.
				</p>

				<nav aria-label='Footer Nav' className='mt-12'>
					<ul className='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
						{footerLinks.map((item, index) => (
							<li key={index}>
								<a
									className='text-gray-200 transition hover:text-gray-200/75'
									href={item.link}
									target='_blank'
									rel='noreferrer'
								>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<ul className='mt-12 flex justify-center gap-6 md:gap-8'>
					{footerImages.map((item, index) => (
						<li key={index}>
							<a
								href={item.link}
								rel='noreferrer'
								target='_blank'
								className='text-gray-200 transition hover:text-gray-200/75'
							>
								<span className='sr-only'>{item.title}</span>
								<Image
									src={item.image}
									alt={item.title}
									width={28}
									height={28}
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;

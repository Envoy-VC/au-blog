import { useState } from 'react';
import { AboutCard } from '@/components';

import { tracks } from '@/constants';

const About = () => {
	return (
		<section className='bg-white text-black w-full'>
			<div className='mx-auto max-w-screen-2xl px-4 py-32 lg:flex lg:items-center'>
				<div className='mx-auto text-center'>
					<span className='bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent text-[20px] font-neueMontrealRegular font-semibold tracking-widest'>
						[ choose your track ]
					</span>
					<div class='mt-4 text-[#020202] text-4xl sm:text-[54px] font-neueMontreal font-extrabold leading-[54px]'>
						What is your writing style?
					</div>
					<div className='mt-16 flex flex-col sm:flex-row gap-16 justify-center items-center'>
						{tracks.map((track, index) => (
							<AboutCard
								key={index}
								logo={track.logo}
								text={track.title}
								description={track.description}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

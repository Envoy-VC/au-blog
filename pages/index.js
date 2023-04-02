import Image from 'next/image';

import { Navbar } from '@/components';
import { Hero, About, Connect, BrowseArticles, Footer } from '@/sections';

import cloudLeft from '../assets/clouds-bg-03.png';
import cloudRight from '../assets/cloud-bg-02.png';
import yellowHue from '../assets/yellow_hue.png';
import globe from '../assets/globe.png';

const Home = () => (
	<div className='overflow-hidden'>
		<div className='relative'>
			<Navbar />
			<Image
				src={cloudLeft}
				className='z-0 absolute mt-64'
				alt='cloud gradient'
			/>
			<Image
				src={globe}
				className='z-0 absolute  mt-[300px]'
				alt='Globe'
			/>
			<Image
				src={yellowHue}
				className='z-0 absolute w-[450px] h-[450px] animate-float mb-16 opacity-60'
				alt='yellow hue'
			/>
			<Hero />
		</div>
		<div className='relative'>
			<Image
				src={cloudRight}
				className='z-0 absolute right-[-300px] top-0'
				alt='cloud gradient'
			/>
			<About />
		</div>
		<BrowseArticles />
		<Connect />
		<Footer />
	</div>
);

export default Home;

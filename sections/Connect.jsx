import Image from 'next/image';
import discord from '../assets/discord.png';

const Connect = () => {
	return (
		<section className='bg-white text-black w-full'>
			<div className='mx-auto max-w-screen-2xl px-4 pt-8 pb-32 lg:flex lg:items-center'>
				<div className='mx-auto text-center'>
					<span className='bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent text-[20px] font-neueMontrealRegular font-semibold tracking-widest'>
						[ community ]
					</span>
					<div class='mt-4 text-[#020202] text-4xl sm:text-[54px] font-neueMontreal font-extrabold leading-[54px]'>
						Connect with
					</div>
					<div class='mt-4 text-[#020202] text-4xl sm:text-[54px] font-neueMontreal font-extrabold leading-[54px]'>
						other writers
					</div>
					<p className='mx-auto mt-4 max-w-xl text-[16px] sm:leading-relaxed text-[#4e4e4ed9] leading-10 font-neueMontrealRegular tracking-widest'>
						Meet thousands of writers all over the world and connect with them!
					</p>
					<div>
						<a
							href='https://discord.com/invite/alchemy-university'
							target='_blank'
							rel='noreferrer'
						>
							<div className='bg-black text-white flex flex-row justify-evenly items-center mt-8 max-w-[200px] mx-auto p-4 rounded-[20px] font-neueMontrealRegular font-semibold'>
								<Image src={discord} width={36} height={36} alt='discord' />
								Join Discord
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Connect;

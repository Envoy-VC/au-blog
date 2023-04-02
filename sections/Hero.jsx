const Hero = () => (
	<section className='bg-white text-black'>
		<div className='mx-auto max-w-screen-xl px-4 py-16 border-2 border-red-500'>
			<div className='mx-auto max-w-3xl text-center'>
				<h1 className='text-[#020202] text-6xl sm:text-[64px] font-neueMontreal font-extrabold leading-[84px]'>
					Tech Writers Guild
				</h1>

				<p className='mx-auto mt-4 max-w-xl text-[16px] sm:text-[22px] sm:leading-relaxed text-[#4e4e4ed9] leading-10 font-neueMontrealRegular tracking-widest font-semibold'>
					Join the Guild and Explore the Limitless Possibilities of
					Decentralized Tech Writing
				</p>

				<div className='mt-16 flex flex-col sm:flex-row justify-center gap-4 items-center'>
					<button className='max-w-xs bg-black px-12 py-3 text-xl font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto rounded-2xl transition-all delay-100'>
						Get started
					</button>
					<button className='max-w-xs bg-white px-12 py-3 text-xl font-medium text-black hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto rounded-2xl transition-all delay-100 box-shadow-1'>
						Learn More
					</button>
				</div>
			</div>
		</div>
	</section>
);

export default Hero;

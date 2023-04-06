import React from 'react';
import { FAQCard } from '@/components';
import { faqs } from '@/constants';

const FAQ = () => {
	return (
		<section className='bg-white text-black w-full'>
			<div className='mx-auto max-w-screen-2xl px-4 pt-8 pb-32 lg:flex lg:items-center'>
				<div className='mx-auto text-center'>
					<span className='bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent text-[20px] font-neueMontrealRegular font-semibold tracking-widest'>
						[ faqs ]
					</span>
					<div className='mt-4 text-[#020202] text-4xl sm:text-[54px] font-neueMontreal font-extrabold leading-[54px]'>
						Any Questions?
					</div>
					<div className='mt-4 text-[#020202] text-4xl sm:text-[54px] font-neueMontreal font-extrabold leading-[54px]'>
						Look Here
					</div>
					<p className='mx-auto mt-4 max-w-xl text-[16px] sm:leading-relaxed text-[#4e4e4ed9] leading-10 font-neueMontrealRegular tracking-widest'>
						Find answers to common questions about the Alchemy University Tech
						Writers Guild and our Web3 writing contests.
					</p>
					<div className='flex flex-col gap-4 items-center justify-center py-16'>
						{faqs.map((faq, index) => (
							<FAQCard
								key={index}
								question={faq.question}
								answer={faq.answer}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;

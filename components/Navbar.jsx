import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { hamburgerVariants } from '../utils/motion';

import logo from '../assets/logo.png';
import logoSmall from '../assets/logo-small.svg';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine = `h-[3px] w-[18px] my-[2px] rounded-full bg-black transition ease transform duration-300`;
	return (
		<nav className='bg-white max-w-screen-2xl mx-auto z-10'>
			<div className='flex flex-row justify-between px-6 md:px-12 py-12'>
				<div className='flex items-center w-fit order-2 md:order-1'>
					<Image
						src={logo}
						alt='logo'
						width={300}
						height={250}
						className='hidden md:block'
					/>
					<Image
						src={logoSmall}
						alt='logo'
						width={150}
						height={150}
						className='block md:hidden'
					/>
				</div>
				<div className='hidden md:flex items-center order-1 md:order-2 justify-center'>
					<ul className='flex font-neueMontreal font-black text-[18px]'>
						<li className='mr-[20px] hover:text-[#5578F8]'>
							<a href='#' rel='noreferrer' target='_blank'>
								BLOG
							</a>
						</li>
						<li className='mx-4 hover:text-[#5578F8]'>
							<a href='/contests' rel='noreferrer' target='_blank'>
								CONTESTS
							</a>
						</li>
					</ul>
					<div className='ml-4'>
						<ConnectButton showBalance={false} />
					</div>
				</div>

				{/* Small Screen Navigation*/}
				<div className='flex md:hidden'>
					<button
						className='flex flex-col h-12 w-12 rounded justify-center items-center group'
						onClick={() => setIsOpen(!isOpen)}
					>
						<div
							className={`${genericHamburgerLine} ${
								isOpen
									? 'rotate-45 translate-y-[7px] opacity-50 group-hover:opacity-100'
									: 'opacity-50 group-hover:opacity-100'
							}`}
						/>
						<div
							className={`${genericHamburgerLine} ${
								isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
							}`}
						/>
						<div
							className={`${genericHamburgerLine} ${
								isOpen
									? '-rotate-45 -translate-y-[7px] opacity-50 group-hover:opacity-100'
									: 'opacity-50 group-hover:opacity-100'
							}`}
						/>
					</button>
				</div>
			</div>
			{isOpen && (
				<motion.div
					variants={hamburgerVariants}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false, amount: 0.25 }}
					className='bg-white max-w-screen-2xl md:hidden flex flex-col justify-between px-16 mx-auto '
				>
					<ul className='flex flex-col font-neueMontreal font-black text-[18px]'>
						<li className='mb-4 hover:text-[#5578F8]'>
							<a href='#' rel='noreferrer' target='_blank'>
								BLOG
							</a>
						</li>
						<li className='mb-4 hover:text-[#5578F8]'>
							<a href='/contests' rel='noreferrer' target='_blank'>
								CONTESTS
							</a>
						</li>
					</ul>
					<div className='mb-4'>
						<ConnectButton
							accountStatus={{
								smallScreen: 'avatar',
								largeScreen: 'full',
							}}
							showBalance={{
								smallScreen: false,
								largeScreen: true,
							}}
						/>
					</div>
				</motion.div>
			)}
		</nav>
	);
};

export default Navbar;

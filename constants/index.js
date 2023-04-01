import research from '../assets/research-deepdive.png';
import implementation from '../assets/implementation-deepdive.png';
import thread from '../assets/twitter-thread.png';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';
import mail from '../assets/mail.svg';
import linkedin from '../assets/linkedin.svg';
import discord from '../assets/discord.png';

export const tracks = [
	{
		id: '1',
		title: 'Research Deep Dive',
		logo: research,
		description:
			'Share your insights and analysis on the latest developments in decentralized finance, blockchain governance, and more.',
	},
	{
		id: '2',
		title: 'Implementation Deep Dive',
		logo: implementation,
		description:
			'Showcase your technical writing skills by explaining how Web3 can be used in real-world problems.',
	},
	{
		id: '3',
		title: 'Twitter Threads',
		logo: thread,
		description:
			'Showcase your ability to communicate complex ideas in short, concise threads.',
	},
];

export const footerLinks = [
	{
		title: 'Products',
		link: 'https://www.alchemy.com/',
	},
	{
		title: 'Developers',
		link: 'https://docs.alchemy.com/',
	},
	{
		title: 'Learn',
		link: 'https://university.alchemy.com/',
	},
	{
		title: 'Blog',
		link: '/',
	},
	{
		title: 'Company',
		link: 'https://www.alchemy.com/company',
	},
];

export const footerImages = [
	{
		title: 'Twitter',
		link: 'https://twitter.com/alchemyplatform',
		image: twitter,
	},
	{
		title: 'GitHub',
		link: 'https://github.com/Alchemy-University',
		image: github,
	},
	{
		title: 'LinkedIn',
		link: 'https://www.linkedin.com/school/alchemy-university/',
		image: linkedin,
	},
	{
		title: 'Discord',
		link: 'https://university.alchemy.com/discord',
		image: discord,
	},
	{
		title: 'Mail',
		link: 'hello@alchemy.com',
		image: mail,
	},
];

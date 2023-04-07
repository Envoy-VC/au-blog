import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';

import Skeleton from 'react-loading-skeleton';

import { GET_CONTEST } from '@/utils/query';

import 'react-loading-skeleton/dist/skeleton.css';

const ContestDetail = ({ id }) => {
	const router = useRouter();
	const route = router.query;
	const [contest, setContest] = useState([]);
	useEffect(() => {
		const hygraph = new GraphQLClient(
			'https://api-ap-south-1.hygraph.com/v2/clg14kh35843801un41i6e6tb/master'
		);

		const fetchContest = async () => {
			const query = GET_CONTEST(id);
			const gqlQuery = gql`
				${query}
			`;
			const contest = await hygraph.request(gqlQuery);
			setContest(contest.contests[0]);
		};
		fetchContest();
	}, []);

	const getContentFragment = (index, text, obj, type) => {
		let modifiedText = text;

		if (obj) {
			if (obj.bold) {
				modifiedText = <b key={index}>{text}</b>;
			}

			if (obj.italic) {
				modifiedText = <em key={index}>{text}</em>;
			}

			if (obj.underline) {
				modifiedText = <u key={index}>{text}</u>;
			}
		}

		switch (type) {
			case 'heading-two':
				return (
					<h3
						key={index}
						className='mt-4 px-4 text-[#020202] text-3xl sm:text-[36px] font-neueMontreal font-extrabold leading-[54px]'
					>
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</h3>
				);
			case 'paragraph':
				return (
					<p
						key={index}
						className='my-4 px-4 text-[16px] sm:leading-relaxed text-[#000000d9] leading-10 font-neueMontrealRegular tracking-widest'
					>
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</p>
				);
			default:
				return modifiedText;
		}
	};

	return (
		<div>
			<div className='bg-gray-200 p-4 rounded-lg shadow-lg'>
				<div className='mt-4 text-[#020202d0] text-3xl sm:text-[48px] font-neueMontreal font-extrabold leading-[54px]'>
					{contest.title || <Skeleton />}
				</div>
				<p className='mt-4 bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent text-[20px] font-neueMontrealRegular font-semibold tracking-widest'>
					{contest.title ? contest.category.replace(/_/g, ' ') : <Skeleton />}
				</p>
				<p className='mt-4 text-[16px] sm:leading-relaxed text-[#4e4e4ed9] leading-10 font-neueMontrealRegular tracking-widest'>
					{contest.description || <Skeleton />}
				</p>
				<p className='mt-4 text-[16px] sm:leading-relaxed text-[#4e4e4ed9] leading-10 font-neueMontrealRegular tracking-widest'>
					<span className='text-[#020202be] font-neueMontreal'>
						{contest.title ? 'Start Date: ' : <Skeleton width={200} />}
					</span>
					{new Date(contest.startDate).toUTCString() || <Skeleton />}
				</p>
				<p className='mt-4 text-[16px] sm:leading-relaxed text-[#4e4e4ed9] leading-10 font-neueMontrealRegular tracking-widest'>
					<span className='text-[#020202be] font-neueMontreal'>
						{contest.title ? 'End Date: ' : <Skeleton width={200} />}
					</span>
					{new Date(contest.endDate).toUTCString() || <Skeleton />}
				</p>
			</div>
			<div className='bg-gray-200 p-4 rounded-lg shadow-lg mt-8'>
				{contest.title ? (
					contest.content.raw.children.map((typeObj, index) => {
						const children = typeObj.children.map((item, itemindex) =>
							getContentFragment(itemindex, item.text, item)
						);

						return getContentFragment(index, children, typeObj, typeObj.type);
					})
				) : (
					<Skeleton count={10} />
				)}
			</div>
		</div>
	);
};

export default ContestDetail;

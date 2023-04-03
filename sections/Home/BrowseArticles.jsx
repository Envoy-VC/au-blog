import { useEffect, useState } from 'react';
import { BlogCard } from '@/components';
import { GET_ARTICLES } from '@/utils/query';

const BrowseArticles = () => {
	const [articles, setArticles] = useState([]);

	const fetchArticles = async () => {
		const variables = { page: 0 };
		const data = await fetch('https://api.hashnode.com/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: GET_ARTICLES,
				variables,
			}),
		});
		const res = await data.json();
		setArticles(res.data.user.publication.posts);
	};

	useEffect(() => {
		fetchArticles();
	}, []);

	return (
		<section className='bg-white text-black'>
			<div className='mx-auto max-w-screen-2xl px-4 py-16 mt-12 lg:flex lg:items-center'>
				<div className=''>
					<span className='bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent text-[20px] font-neueMontrealRegular font-semibold tracking-widest'>
						[ browse articles ]
					</span>
					<div class='mt-4 text-[#020202] text-4xl sm:text-[54px] font-neueMontreal font-extrabold leading-[54px]'>
						Explore the Latest Insights
					</div>
					<div className='mt-16 flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap'>
						{articles.slice(0, 3).map((article, index) => (
							<BlogCard
								key={index}
								coverImage={article.coverImage}
								title={article.title}
								brief={article.brief}
								slug={article.slug}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default BrowseArticles;

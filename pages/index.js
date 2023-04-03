import { Navbar } from '@/components';
import { Hero, About, Connect, BrowseArticles, FAQ, Footer } from '@/sections';

const Home = () => (
	<div className='bg-white overflow-hidden'>
		<Navbar />
		<Hero />
		<About />
		<BrowseArticles />
		<Connect />
		<FAQ />
		<Footer />
	</div>
);

export default Home;

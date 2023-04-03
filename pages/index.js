import { Navbar, Footer } from '@/components';
import { Hero, About, Connect, BrowseArticles, FAQ } from '@/sections/Home';

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

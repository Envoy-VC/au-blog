import { Navbar } from '@/components';
import { Hero, About, Connect, BrowseArticles, Footer } from '@/sections';

const Home = () => (
	<div>
		<Navbar />
		<Hero />
		<About />
		<BrowseArticles />
		<Connect />
		<Footer />
	</div>
);

export default Home;

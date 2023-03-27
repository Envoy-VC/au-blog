import { Navbar } from '@/components';
import { Hero, About, Connect } from '@/sections';

const Home = () => (
	<div>
		<Navbar />
		<Hero />
		<About />
		<Connect />
	</div>
);

export default Home;

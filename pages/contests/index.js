import React from 'react';
import { Navbar, DynamicUtilityComponent, ContestCard } from '@/components';
import { BrowseContests } from '@/sections/Contests';
import { Footer } from '@/sections/Home';

const Contests = () => (
	<div>
		<Navbar />
		<BrowseContests />
	</div>
);

export default Contests;

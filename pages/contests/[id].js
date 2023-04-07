import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Navbar, Footer } from '@/components';
import { ContestDetails } from '@/sections/Contests';

const ContestPage = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div>
			<Navbar />
			{id && <ContestDetails id={id} />}
			<Footer />
		</div>
	);
};

export default ContestPage;

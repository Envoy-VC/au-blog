import dynamic from 'next/dynamic';

const DynamicUtilityComponent = dynamic(() => import('./UtilityComponent'), {
	ssr: false,
});

export default DynamicUtilityComponent;

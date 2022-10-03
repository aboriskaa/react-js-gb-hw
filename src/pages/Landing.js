import React from 'react';

import { ParallaxProvider } from 'react-scroll-parallax';
import Paralax from '../components/Paralax';
import kaktus from '../img/kakt.png';

export default function Landing() {
	console.log('render');

	return (
		<ParallaxProvider>
			<Paralax />
		</ParallaxProvider>
	);
}

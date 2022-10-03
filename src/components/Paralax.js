import React from 'react';
import styles from './ParallaxBanner.module.css';
import {
	ParallaxBanner,
	ParallaxBannerLayer,
	Wrapper,
} from 'react-scroll-parallax';
const image2 =
	'https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg';
const image3 =
	'https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001';
const image4 =
	'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg';
const image1 =
	'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';

export default function Paralax() {
	return (
		<>
			<ParallaxBanner
				className={styles.bannerBg}
				style={{ aspectRatio: '2 / 1' }}
				layers={[
					{
						image:
							'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg',
						speed: -40,
					},
				]}
			>
				<div className={styles.parallaxChildren}>
					<h1>Headline Text</h1>
				</div>
			</ParallaxBanner>
			<h1>|||</h1>
			<h1>|||</h1>
			<h1>|||</h1>
			<h1>|||</h1>
			<h1>|||</h1>
			<ParallaxBanner
				className={styles.bannerBg}
				style={{ aspectRatio: '2 / 1' }}
				layers={[
					{
						image:
							'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg',
						speed: -20,
					},
				]}
			>
				<div className={styles.parallaxChildren}>
					<h1>Headline Text</h1>
				</div>
			</ParallaxBanner>
		</>
	);
}

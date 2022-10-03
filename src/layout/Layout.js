import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
	return (
		<>
			<Header />

			<Container
				component='main'
				position='fixed'
			>
				<Box
					sx={{
						marginTop: 12,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Outlet />
				</Box>
			</Container>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Footer />
			</Box>
		</>
	);
}

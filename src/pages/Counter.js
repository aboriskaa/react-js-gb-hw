import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterSelector } from '../redux/reducers/counterReducer/counterSelector';

export default function Counter() {
	const dispatchCount = useDispatch();
	const count = useSelector(counterSelector);

	return (
		<>
			<Container
				component='main'
				position='fixed'
			>
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					{count}
				</Box>
				<Box
					sx={{
						marginTop: 3,
						display: 'flex',
						flexDirection: 'row',
						justifyItems: 'center',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Button
						variant='contained'
						onClick={() => dispatchCount({ type: 'counter/plus' })}
					>
						+
					</Button>
					<Button
						variant='contained'
						sx={{ ml: 8 }}
						onClick={() => dispatchCount({ type: 'counter/minus' })}
					>
						-
					</Button>
				</Box>
			</Container>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			></Box>
		</>
	);
}

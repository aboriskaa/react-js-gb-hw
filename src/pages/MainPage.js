import { useDispatch, useSelector } from 'react-redux';
import {
	loadingUser,
	logoutInitiate,
} from '../redux/reducers/authenticationReducer/authenticationReducer';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom';

export default function MainPage() {
	const dispatch = useDispatch();
	// const navigate = useNavigate();
	const userInState = useSelector(loadingUser);

	const handleLogout = (event) => {
		event.preventDefault();
		dispatch(logoutInitiate());
	};

	if (!userInState) return <div>Не авторизован</div>;
	else
		return (
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography
						sx={{ fontSize: 14 }}
						color='text.secondary'
						gutterBottom
					>
						{userInState.email}
					</Typography>
					<Typography
						variant='h5'
						component='div'
					>
						{userInState.displayName}
					</Typography>
					<Typography
						sx={{ mb: 1.5 }}
						color='text.secondary'
					>
						UID: {userInState.uid}
					</Typography>
					<Typography variant='body2'></Typography>
				</CardContent>
				<CardActions>
					<Button
						onClick={handleLogout}
						size='small'
					>
						Logout
					</Button>
				</CardActions>
			</Card>
		);
}

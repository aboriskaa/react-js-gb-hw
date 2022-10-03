import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	registerInitiate,
	errorSelector,
	loadingSelector,
	loadingUser,
} from '../../redux/reducers/authenticationReducer/authenticationReducer';

// import { registerError } from '../../redux/actions';

const link = `http://${process.env.REACT_APP_AUTH_DOMAIN}`;

const validateEmail = (eMail) => {
	const validEmail = new RegExp(
		'^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
	);
	// console.log(validEmail.test(eMail));
	return validEmail.test(eMail);
};

function Copyright(props) {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			{...props}
		>
			{'Copyright © '}
			<Link
				color='inherit'
				target='_blank'
				rel='noopener'
				href={link}
			>
				A. Boris
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const theme = createTheme();

export default function SignUpSide() {
	const errorInState = useSelector(errorSelector);
	const loadInState = useSelector(loadingSelector);
	const userInState = useSelector(loadingUser);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [buttDisabled, setButtDisabled] = useState(true);
	const [error, setError] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (userInState) {
			navigate('/');
		}
	}, [userInState, navigate]);

	useEffect(() => {
		const check = function () {
			if (
				email.length > 3 &&
				password.length > 3 &&
				passwordConfirm.length > 3 &&
				displayName.length > 3 &&
				validateEmail(email) &&
				password === passwordConfirm
			) {
				setButtDisabled(false);
			} else {
				setButtDisabled(true);
			}
		};
		check();
	}, [email, password, passwordConfirm, displayName]);

	useEffect(() => {
		const check = function () {
			if (errorInState === 'auth/email-already-in-use') {
				setError('E-Mail already exists, try another E-Mail');
			} else if (errorInState === 'auth/network-request-failed') {
				setError('Network request failed, try reload page!');
			} else {
				setError('');
			}
		};
		check();
	}, [errorInState]);

	useEffect(() => {
		const check = function () {
			loadInState ? setButtDisabled(true) : setButtDisabled(false);
		};
		check();
	}, [loadInState]);

	const handlerRouter = (page, event) => {
		event.preventDefault();
		navigate(page);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// const data = new FormData(event.currentTarget);
		dispatch(registerInitiate(email, password, displayName));
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				component='main'
				sx={{ height: '100vh' }}
			>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={6}
					sx={{
						backgroundImage: 'url(https://source.unsplash.com/random)',
						backgroundRepeat: 'no-repeat',
						backgroundColor: (t) =>
							t.palette.mode === 'light'
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
				<Grid
					item
					xs={12}
					sm={8}
					md={6}
					component={Paper}
					elevation={6}
					square
				>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography
							component='h1'
							variant='h5'
						>
							Sign up
						</Typography>
						<Box
							component='form'
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 1 }}
						>
							{error.length > 1 && (
								<Stack
									sx={{ width: '100%' }}
									spacing={2}
								>
									<Alert severity='error'>{error}</Alert>
								</Stack>
							)}

							<TextField
								onChange={(e) => setDisplayName(e.target.value)}
								margin='normal'
								required
								fullWidth
								id='displayName'
								label='Your name'
								name='displayName'
								autoComplete='name'
								autoFocus
							/>
							<TextField
								onChange={(e) => setEmail(e.target.value)}
								margin='normal'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								autoFocus
							/>
							<TextField
								onChange={(e) => setPassword(e.target.value)}
								margin='normal'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
							/>
							<TextField
								onChange={(e) => setPasswordConfirm(e.target.value)}
								margin='normal'
								required
								fullWidth
								name='passwordConfirm'
								label='Confirm password'
								type='password'
								id='passwordConfirm'
								autoComplete='current-password'
							/>
							<Button
								disabled={buttDisabled}
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
							>
								Sign Up
							</Button>
							<Grid container>
								<Grid
									item
									xs
								></Grid>
								<Grid item>
									<Link
										onClick={(event) => handlerRouter('/login', event)}
										href='#'
										variant='body2'
									>
										{'Do you have an account? Sign In'}
									</Link>
								</Grid>
							</Grid>
							<Copyright sx={{ mt: 5 }} />
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

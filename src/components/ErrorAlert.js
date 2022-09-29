import React, { useEffect, useCallback } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
	return (
		<MuiAlert
			elevation={6}
			ref={ref}
			variant='filled'
			{...props}
		/>
	);
});

export default function ErrorAlert(props) {
	const [open, setOpen] = React.useState(false);
	console.log(props);
	const handleClick = () => {
		setOpen(true);
	};

	const err = useCallback(() => {
		if (props.error) {
			handleClick();
		}
	}, [props]);

	useEffect(() => {
		err();
	}, [err]);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<Stack
			spacing={2}
			sx={{ width: '100%' }}
		>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
			>
				<Alert
					onClose={handleClose}
					severity='error'
					sx={{ width: '100%' }}
				>
					{props.error}
				</Alert>
			</Snackbar>
		</Stack>
	);
}

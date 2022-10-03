import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Gnews({ data }) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component='img'
					height='140'
					image={data.image}
					alt='green iguana'
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
					>
						{data.title}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
					>
						{data.content}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

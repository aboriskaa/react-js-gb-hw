import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { newsLoading } from '../../redux/reducers/newsReducer/newsSelector';
import { getNews } from '../../redux/reducers/newsReducer/newsReducer';

export default function Search() {
	const dispatch = useDispatch();
	const loading = useSelector(newsLoading);

	const [search, setSearch] = useState('');

	const handlerRunSearch = () => {
		dispatch(getNews(search));
	};

	return (
		<>
			<Box sx={{ marginTop: 1 }}>
				<TextField
					required
					id='outlined-required'
					label='What news do you want?'
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
			</Box>
			<Box sx={{ marginTop: 1 }}>
				<Button
					disabled={loading || search === '' ? true : false}
					variant='outlined'
					href='#outlined-buttons'
					onClick={handlerRunSearch}
				>
					Search
				</Button>
			</Box>
		</>
	);
}

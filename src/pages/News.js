import React, { useEffect, useCallback } from 'react';
import Gnews from '../components/Gnews/Gnews';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import {
	newsGetSelector,
	newsLoading,
	newsSearchSelector,
	newsErrorSelector,
} from '../redux/reducers/newsReducer/newsSelector';
import { getNews } from '../redux/reducers/newsReducer/newsReducer';
import Preloader from '../components/Preloader';
import { v4 as uuidv4 } from 'uuid';
import Search from '../components/Gnews/Search';
import ErrorAlert from '../components/ErrorAlert';
// import Button from '@mui/material/Button';

export default function News() {
	const dispatch = useDispatch();
	const news = useSelector(newsGetSelector);
	const search1 = useSelector(newsSearchSelector);
	const loading = useSelector(newsLoading);
	const error = useSelector(newsErrorSelector);

	const searchCallback = useCallback(() => {
		dispatch(getNews(search1));
	}, [dispatch, search1]);

	useEffect(() => {
		searchCallback();
	}, [searchCallback]);

	return (
		<>
			{loading ? (
				<>
					<Preloader />
					{/* <Button
						variant='outlined'
						size='medium'
						sx={{ mt: 2 }}
						onClick={dispatch(getNews(search1))}
					>
						Try yet
					</Button> */}
					<ErrorAlert error={error} />
				</>
			) : (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						flexWrap: 'wrap',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box width={'230px'}>
						<Search />
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							gap: '1rem',
							flexWrap: 'wrap',
							justifyContent: 'center',
						}}
					>
						{news.map((e) => (
							<Gnews
								key={uuidv4()}
								data={e}
							/>
						))}
					</Box>
				</Box>
			)}
		</>
	);
}

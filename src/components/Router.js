import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Counter from '../pages/Counter';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MainPage from '../pages/MainPage';
import News from '../pages/News';
import Profile from '../pages/Profile';
import MainChat from './Chat';

export default function Router() {
	return (
		<Routes>
			<Route
				path='landing'
				element={<Landing />}
			/>
			<Route
				path='login'
				element={<Login />}
			/>
			<Route
				path='register'
				element={<Register />}
			/>
			<Route
				path='/'
				element={<Layout />}
			>
				<Route
					index
					element={<MainPage />}
				/>

				<Route
					path='profile'
					element={<Profile />}
				/>

				<Route
					path='news'
					element={<News />}
				/>

				<Route
					path='counter'
					element={<Counter />}
				/>
				<Route
					path='chat'
					element={<MainChat />}
				>
					<Route
						path=':roomid'
						element={<MainChat />}
					/>
				</Route>
				<Route
					path='*'
					element={
						<main style={{ padding: '1rem' }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Route>
		</Routes>
	);
}

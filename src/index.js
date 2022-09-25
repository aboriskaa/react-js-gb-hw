import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { persistStore } from 'reduxjs-toolkit-persist';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import store from './redux/store';
import App from './App';

let persistor = persistStore(store);

const theme = createTheme({
	palette: {
		primary: {
			main: '#009688',
		},
		secondary: {
			main: '#00e676',
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	// <React.StrictMode>
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</ThemeProvider>
	// </React.StrictMode>
);

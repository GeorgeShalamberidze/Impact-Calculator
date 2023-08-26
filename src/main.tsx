import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/assets/css/index.css';
import CardContextProvider from './context/CardContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CardContextProvider>
			<App />
		</CardContextProvider>
	</React.StrictMode>
);

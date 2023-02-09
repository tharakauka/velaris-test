import React, { Component } from 'react';
import Main from './Pages/Welcome';
import { ConfigProvider } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Scss/styles.scss';

function App() {
	return (
		<ConfigProvider
			theme={{
			token: {
				colorPrimary: 'rgba(111, 106, 248, 1)',
			},
			}}
		>
			<Main />
		</ConfigProvider>
		
	);
}

export default App;

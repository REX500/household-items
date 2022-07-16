import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Snackbar from './features/snackbar/snackbar';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<RecoilRoot>
				<>
					<App />
					<Snackbar />
				</>
			</RecoilRoot>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Snackbar from './features/snackbar/snackbar'
import { store } from './store'
import Auth0ProviderWithNavigate from './utilities/auth/auth0history'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Auth0ProviderWithNavigate>
					<>
						<App />
						<Snackbar />
					</>
				</Auth0ProviderWithNavigate>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

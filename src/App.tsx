import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { Route, Routes } from 'react-router-dom'
import { About, Home } from './pages'
import { setAccessToken } from './reducers/auth.reducer'

export default function App() {
	const dispatch = useDispatch()
	const { isAuthenticated, getAccessTokenSilently } = useAuth0()

	// Set token in Redux if user is authenticated.
	useEffect(() => {
		const getToken = async () => {
			const token = await getAccessTokenSilently()

			if (token) {
				dispatch(setAccessToken(token))
			}
		}

		isAuthenticated && getToken()
	}, [isAuthenticated])

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
		</Routes>
	)
}

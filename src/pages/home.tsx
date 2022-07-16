import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchStores } from '../reducers/example.reducer'
import { useAuth0 } from '@auth0/auth0-react'

export default function Home() {
	const { data } = useAppSelector((state) => state.example)
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

	const dispatch = useAppDispatch()

	return (
		<div>
			<h1>Home</h1>

			<nav>
				<Link to="/about">About</Link>
			</nav>

			<p>Total stores: {data.length}</p>

			<p>
				Available stores: {data.filter((store) => store.isAvailable).length}
			</p>

			<p>
				Unavailable stores: {data.filter((store) => !store.isAvailable).length}
			</p>

			<Box my={2}>
				<Button variant="contained" onClick={() => dispatch(fetchStores())}>
					Load stores
				</Button>
			</Box>

			<Box my={2}>
				{isAuthenticated ? (
					<Button
						variant="contained"
						onClick={() => logout({ returnTo: window.location.origin })}
					>
						Logout
					</Button>
				) : (
					<Button variant="contained" onClick={loginWithRedirect}>
						Login
					</Button>
				)}
			</Box>
		</div>
	)
}

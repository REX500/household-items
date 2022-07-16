import { useNavigate } from 'react-router-dom'
import { Auth0Provider, AppState } from '@auth0/auth0-react'

const Auth0ProviderWithNavigate = ({
	children,
}: {
	children: JSX.Element
}): JSX.Element => {
	const navigate = useNavigate()

	const onRedirectCallback = (appState: AppState): void => {
		navigate(appState?.returnTo || window.location.pathname)
	}

	return (
		<Auth0Provider
			domain={import.meta.env.VITE_AUTH0_DOMAIN || ''}
			clientId={import.meta.env.VITE_AUTH0_CLIENT_ID || ''}
			useRefreshTokens
			cacheLocation="localstorage"
			redirectUri={`${window.location.origin}/`}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	)
}

export default Auth0ProviderWithNavigate

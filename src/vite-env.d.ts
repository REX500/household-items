/// <reference types="vite/client" />

interface ImportMetaEnv {
	// API
	readonly VITE_API_URL: string | undefined

	// Auth0
	readonly VITE_AUTH0_AUDIENCE: string | undefined
	readonly VITE_AUTH0_CLIENT_ID: string | undefined
	readonly VITE_AUTH0_DOMAIN: string | undefined
	readonly VITE_AUTH0_SCOPE: string | undefined
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

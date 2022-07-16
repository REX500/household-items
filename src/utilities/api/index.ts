import axios, {
	AxiosRequestConfig,
	AxiosError,
	AxiosPromise,
	AxiosResponse,
} from 'axios'
import { z } from 'zod'
import * as Sentry from '@sentry/browser'
import { assertValueIsApiError, assertValueIsObject } from '../assertors'

// Redux
import { RootState } from '../../store'
import { setOpen } from '../../reducers/snackbar.reducer'

// Interfaces
import { AppDispatch } from '../../store'

// Helpers

function getErrorMessage(err: AxiosError): string {
	const data = err.response?.data

	// assertions
	assertValueIsObject(data)
	assertValueIsApiError(data)

	// extract api error
	const { error, message } = data

	const messageToReturn = `${error} - ${message}`
	return messageToReturn
}

type StoreType = {
	getState: () => RootState
	dispatch: AppDispatch
}

// To avoid circular dependencies
let store: StoreType
export const injectStore = (_store: StoreType): void => {
	store = _store
}

// Setup
const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL || '',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})
axiosInstance.interceptors.request.use(
	function (config) {
		const token = store?.getState?.().auth.token

		config = {
			...config,
			headers: {
				...config.headers,
				authorization: `Bearer ${token}`,
			},
		}

		// Do something before request is sent
		return config
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error)
	}
)

// Helper
const handleError = (error: AxiosError) => {
	const body = {
		message: getErrorMessage(error),
		type: 'error' as const,
	}

	store.dispatch(setOpen(body))
	throw error
}

const handlePromiseResolved = (
	res: AxiosResponse,
	extraProps?: { validator: z.ZodTypeAny }
) => {
	if (extraProps?.validator) {
		try {
			extraProps.validator.parse(res.data)
		} catch (error: unknown) {
			const url = res.request.responseURL

			console.error(`Runtime request error at ${url}`, error)
			Sentry.withScope((scope) => {
				scope.setExtra('error', error)
				Sentry.captureException(error)
				Sentry.captureMessage(`Api response changed in ${url}`)
			})
		}
	}
	return res
}

// Api calls
export function get(
	url: string,
	extraProps?: { validator: z.ZodTypeAny }
): AxiosPromise {
	return axiosInstance
		.get(url)
		.then((res) => handlePromiseResolved(res, extraProps))
		.catch(handleError)
}

export function post(
	url: string,
	body: unknown,
	config?: AxiosRequestConfig
): AxiosPromise {
	return axiosInstance.post(url, body, config).catch(handleError)
}

export function patch(url: string, body: unknown): AxiosPromise {
	return axiosInstance.patch(url, body).catch(handleError)
}

export function put(url: string, body: unknown): AxiosPromise {
	return axiosInstance.put(url, body).catch(handleError)
}

export function remove(url: string): AxiosPromise {
	return axiosInstance.delete(url).catch(handleError)
}

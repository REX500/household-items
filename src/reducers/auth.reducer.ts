import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Auth {
	token: string
	expiresAt: string
}

const initialState: Auth = {
	token: '',
	expiresAt: '',
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAccessToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload
		},
		setExpiresAt: (state, action: PayloadAction<string>) => {
			state.expiresAt = action.payload
		},
	},
})

export const { setAccessToken, setExpiresAt } = authSlice.actions

export default authSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/auth.reducer'
import snackbarReducer from '../reducers/snackbar.reducer'
import exampleReducer from '../reducers/example.reducer'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		snackbar: snackbarReducer,
		example: exampleReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

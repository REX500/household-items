// utils
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SnackbarOrigin } from '@mui/material'

type SnackbarType = 'success' | 'error' | 'warning' | 'info'

interface ISnackbar {
	open?: boolean
	message: string
	anchorOrigin?: SnackbarOrigin
	autoHideDuration?: number
	type?: SnackbarType
}

const initialState: ISnackbar = {
	open: false,
	message: '',
	anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
	autoHideDuration: 5000,
	type: 'success',
}

const snackbarSlice = createSlice({
	name: 'snackbar',
	initialState,
	reducers: {
		setOpen: (state, action: PayloadAction<ISnackbar>) => {
			state.open = true
			state.message = action.payload.message
			state.type = action.payload.type || initialState.type
			state.anchorOrigin =
				action.payload.anchorOrigin || initialState.anchorOrigin
			state.autoHideDuration =
				action.payload.autoHideDuration || initialState.autoHideDuration
		},
		setClose: (state) => {
			state.open = false
		},
	},
})

export const { setOpen, setClose } = snackbarSlice.actions
export type { ISnackbar }
export default snackbarSlice.reducer

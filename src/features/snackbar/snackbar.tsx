// redux
// import { useAppSelector, useAppDispatch } from '../../store/hooks'
// import { setClose } from '../../reducers/snackbar.reducer'

// components
import { Snackbar as SnackbarMUI, Alert } from '@mui/material';

export default function Snackbar(): JSX.Element {
	// setup
	// const { open, message, anchorOrigin, autoHideDuration, type } =
	// 	useAppSelector((state) => state.snackbar)
	// const dispatch = useAppDispatch()

	// handlers
	const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		// dispatch(setClose())
	};

	return (
		<></>
		// <SnackbarMUI
		// 	open={open}
		// 	autoHideDuration={autoHideDuration}
		// 	onClose={handleClose}
		// 	anchorOrigin={anchorOrigin}
		// >
		// 	<Alert
		// 		variant="filled"
		// 		onClose={handleClose}
		// 		severity={type}
		// 		sx={{ width: '100%' }}
		// 	>
		// 		{message}
		// 	</Alert>
		// </SnackbarMUI>
	);
}

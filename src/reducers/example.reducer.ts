import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { get } from '../utilities/api'

// Interfaces
interface IStore {
	name: string
	isAvailable: boolean
}

interface IExampleReducer {
	data: Array<IStore>
	loading: boolean
}

const initialState: IExampleReducer = {
	data: [],
	loading: false,
}

export const fetchStores = createAsyncThunk('/me/stores', async () => {
	const response = await get('/me/stores')
	console.log('r', response.data)
	return response.data as IStore[]
})

const ExampleSlice = createSlice({
	name: 'example',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchStores.pending, (state) => {
			state.loading = true
		})
		builder.addCase(fetchStores.fulfilled, (state, action) => {
			console.log('a', action)
			state.data = action.payload
			state.loading = false
		})
		builder.addCase(fetchStores.rejected, (state) => {
			state.loading = false
		})
	},
})

export default ExampleSlice.reducer

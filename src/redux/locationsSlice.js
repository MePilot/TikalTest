import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchLocations = createAsyncThunk('location/fetchLocations',
  async (url) => {
    const response = await axios.get(url)
    return response.data
  }
)
const initialState = {
  loading: false,
  allLocations: [],
  location: '',
  error: ''
}
const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.loading = false
        state.location = action.payload
        state.error = ''
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default locationsSlice.reducer
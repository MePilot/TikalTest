import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCharacters2 = createAsyncThunk('characters/fetchCharacters2',
  async (url) => {
    const response = await axios.get(url)
    return response.data
  }
)

const initialState = {
  loading: false,
  characters: [],
  error: ''
}
const charactersSlice2 = createSlice({
  name: 'characters2',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters2.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCharacters2.fulfilled, (state, action) => {
        state.loading = false
        state.characters = action.payload
        state.error = ''
      })
      .addCase(fetchCharacters2.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },

})

export default charactersSlice2.reducer
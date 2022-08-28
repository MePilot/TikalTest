import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchEpisodes = createAsyncThunk('location/fetchEpisodes',
    async (url) => {
        const response = await axios.get(url)
        return response.data
    }
)
const initialState = {
    loading: false,
    allEpisodes: [],
    episode_count: '',
    error: ''
}
const episodesSlice = createSlice({
    name: 'episodes',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchEpisodes.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchEpisodes.fulfilled, (state, action) => {
                state.loading = false
                state.episode_count = action.payload.info.count
                state.error = ''
            })
            .addCase(fetchEpisodes.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default episodesSlice.reducer
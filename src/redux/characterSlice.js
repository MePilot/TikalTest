import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters',
  async (url) => {
    const response = await axios.get(url)
    return response.data
  }
)

const initialState = {
  loading: false,
  unpopular_character: '',
  error: ''
}
const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false
        state.unpopular_character = findUnpopularCharacter(action.payload.results)
        state.error = ''
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

function findUnpopularCharacter(characters) {
  let minVal = Number.MAX_VALUE
  let char = null

  for (let i = 0; i < characters.length; i++) {
    if (characters[i].episode.length < minVal) {
      minVal = characters[i].episode.length
      char = characters[i]
    }
  }
  return char
}

export default charactersSlice.reducer
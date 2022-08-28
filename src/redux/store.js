import { configureStore } from '@reduxjs/toolkit'
import characterSlice from './characterSlice'
import locationsSlice from './locationsSlice'
import episodesSlice from './episodesSlice'

export default configureStore({
  reducer: {
    characters: characterSlice,
    locations: locationsSlice,
    episodes: episodesSlice
  }
})
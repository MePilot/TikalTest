import { configureStore } from '@reduxjs/toolkit'
import characterSlice from './characterSlice'
import characterSlice2 from './characterSlice2'
import locationsSlice from './locationsSlice'
import episodesSlice from './episodesSlice'

export default configureStore({
  reducer: {
    characters: characterSlice,
    characters2: characterSlice2,
    locations: locationsSlice,
    episodes: episodesSlice
  }
})
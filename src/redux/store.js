import { configureStore } from '@reduxjs/toolkit'
import characterSlice from './characterSlice'
import locationsSlice from './locationsSlice'

export default configureStore({
  reducer: {
    characters: characterSlice,
    locations: locationsSlice,
  }
})
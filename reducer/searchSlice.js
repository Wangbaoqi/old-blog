import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'




const initialState = {
  showAlgolia: false
}


export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    toggleSearch: state => {
      state.showAlgolia = !state.showAlgolia
    }
  }
})

export const { toggleSearch } = searchSlice.actions

export const selectSearch = (state) => state.search.showAlgolia


export default searchSlice.reducer

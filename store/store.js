import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'


import searchSlice from '@reducer/searchSlice'

export function makeStore() {
  return configureStore({
    reducer: { search: searchSlice },
  })
}


const store = makeStore()


export default store
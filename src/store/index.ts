import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import cartReducer from './reducers/cart'
const store = configureStore({
  reducer: {
    cart: cartReducer,
    //acessando um objeto dentro de outro objeto. no caso o reducerPath é uma propiedade da nossa API
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store

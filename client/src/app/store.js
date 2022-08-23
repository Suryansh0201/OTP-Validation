import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { OTPApi } from '../Services/OTPApi'

export const store = configureStore({
  reducer: {
    [OTPApi.reducerPath]: OTPApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(OTPApi.middleware),
})
setupListeners(store.dispatch)
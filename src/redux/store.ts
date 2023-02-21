import { configureStore} from '@reduxjs/toolkit'
import { api } from './api'

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
import { configureStore } from "@reduxjs/toolkit";
import StoreHome from "../combine/StoreHome";

const store = configureStore({
    reducer: {
        home: StoreHome
    }
})

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch
export default store
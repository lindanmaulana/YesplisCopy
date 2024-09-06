import { configureStore } from "@reduxjs/toolkit";
import StoreHome from "../combine/StoreHome";

const store = configureStore({
    reducer: {
        home: StoreHome
    }
})

export default store
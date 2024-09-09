import { combineReducers } from "@reduxjs/toolkit";
import headerFeatures from "../slices/headerFeatures";
import authFeatures from "../slices/authFeatures";

const StoreHome = combineReducers(
    {
        header: headerFeatures,
        auth: authFeatures
    }
)

export default StoreHome
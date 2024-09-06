import { combineReducers } from "@reduxjs/toolkit";
import headerFeatures from "../slices/headerFeatures";

const StoreHome = combineReducers(
    {
        header: headerFeatures
    }
)

export default StoreHome
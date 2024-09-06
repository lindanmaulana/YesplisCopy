import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type THeaderFeatures = {
    language: boolean
}


const initialState: THeaderFeatures = {
    language: false
}

const HeaderFeatures = createSlice({
    name: "Header Features",
    initialState,
    reducers: {
        handleLanguage: (state, action: PayloadAction) => {
            state.language = !state.language
        }
    }
})

export const {handleLanguage} = HeaderFeatures.actions
export default HeaderFeatures.reducer
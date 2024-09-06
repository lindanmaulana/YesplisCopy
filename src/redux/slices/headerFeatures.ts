import { createSlice } from "@reduxjs/toolkit"

type THeaderFeatures = {
    languageHome: boolean
    languageComponent: boolean
}


const initialState: THeaderFeatures = {
    languageHome: false,
    languageComponent: false
}

const HeaderFeatures = createSlice({
    name: "Header Features",
    initialState,
    reducers: {
        handleLanguageHome: (state) => {
            state.languageHome = !state.languageHome
            state.languageComponent = false
        },
        handleLanguageComponent: (state) => {
            state.languageComponent = !state.languageComponent
            state.languageHome = false
        }

    }
})

export const {handleLanguageHome, handleLanguageComponent} = HeaderFeatures.actions
export default HeaderFeatures.reducer
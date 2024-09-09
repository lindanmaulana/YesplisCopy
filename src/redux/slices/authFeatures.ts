import { createSlice } from "@reduxjs/toolkit"

interface IAuth {
    login: boolean
    register: boolean
}

const initialState: IAuth = {
    login: false,
    register: false
}

const AuthFeatures = createSlice({
    name: "Auth Features",
    initialState,
    reducers: {
        handleLogin: (state) => {
            state.login = !state.login
            state.register = false
        },
        handleRegister: (state) => {
            state.register = !state.register
            state.login = false
        },
        handleClose: (state) => {
            state.login = false
            state.register = false
        }
    }
})

export const {handleLogin, handleRegister, handleClose} = AuthFeatures.actions
export default AuthFeatures.reducer
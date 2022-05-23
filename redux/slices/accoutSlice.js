import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user : null
}
const account = createSlice({
    name : "account",
    initialState,
    reducers : {
        login : (state , action) => {
            return state
        }
    }
})

export default account.reducer
export const {login} = account.actions
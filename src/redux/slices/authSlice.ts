import { createSlice } from "@reduxjs/toolkit";

interface initialStateTypes {
    isAuthenticated: boolean;
    user: null | { name: string, email: string };
    error: null | string;
    loading: boolean;

}
const initialState : initialStateTypes = {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    }
})

export default authSlice.reducer;
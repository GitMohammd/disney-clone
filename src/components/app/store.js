import { configureStore, getDefaultMiddleWare } from "@reduxjs/toolkit";
import { useReducer } from "../features/users/userSlice";

export default configureStore({
    reducer: {
        user: useReducer
    },
    middleware: getDefaultMiddleWare({
        serializableCheck: false
    })
})
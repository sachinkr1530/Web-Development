import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./slices/CounterSlices";
import counterReducer from "./slices/CounterSlices";

export const store = configureStore({
    reducer:{
        counter: counterReducer
    },
})
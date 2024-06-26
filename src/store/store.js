import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../slice/movieSlice";

export const store = configureStore({
    reducer : {
        movieSlice
    },
})

export const {dispatch} = store;
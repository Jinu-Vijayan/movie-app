import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    movies : [],
    topRated : []
}

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {
        setMovie : (state,action) => {

            state.movies = action.payload

        },
        setTopRated : (state,action) => {
            state.topRated = action.payload
        }
    }
})

export const {setMovie, setTopRated} = movieSlice.actions;

export default movieSlice.reducer
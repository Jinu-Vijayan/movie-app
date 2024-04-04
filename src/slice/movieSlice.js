import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    movieData : [],
    trending : [],
    configurations : ""
}

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {
        setMovieData : (state,action) => {

            state.movieData = action.payload

        },
        setTrending : (state,action) => {
            state.trending = action.payload
        },
        setConfigurations : (state, action) => {
            state.configurations = action.payload;
        }
    }
})

export const {setMovieData, setTrending, setConfigurations} = movieSlice.actions;

export default movieSlice.reducer
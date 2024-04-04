import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    movieData : [],
    trending : [],
    configurations : "",
    popular:[]
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
        },
        setPopular : (state, action) =>{
            state.popular = action.payload
        }
    }
})

export const {setMovieData, setTrending, setConfigurations, setPopular} = movieSlice.actions;

export default movieSlice.reducer
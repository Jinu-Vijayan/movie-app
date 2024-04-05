import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    movieData : [],
    trending : [],
    configurations : "",
    popular:[],
    topRated:[],
    searchResults :[],
    totalPages : 0
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
        },
        setTopRated : (state, action) =>{
            state.topRated = action.payload
        },
        setSearchResults : (state, action) =>{
            state.searchResults = action.payload
        },
        setTotalPages : (state, action) =>{
            state.totalPages = action.payload
        }
    }
})

export const {setMovieData, setTrending, setConfigurations, setPopular, setTopRated, setSearchResults, setTotalPages} = movieSlice.actions;

export default movieSlice.reducer
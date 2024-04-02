import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    movies : [{
        id: "1"
    }]
}

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {
        setMovie : (state,action) => {

            state.movies = action.payload

        }
    }
})

export const {setMovie} = movieSlice.actions;

export default movieSlice.reducer
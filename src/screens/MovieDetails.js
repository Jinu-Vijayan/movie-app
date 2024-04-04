import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../apiCall'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieData } from '../slice/movieSlice'

// TODO
// Complete the movie details card by showing the data recieved inside the movieData variable in line 13 

const MovieDetails = () => {
    const {movieId} = useParams()
    const dispatch = useDispatch()
    const movieData = useSelector((state)=>state.movieSlice?.movieData)

    useEffect(()=>{
        const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}`
        fetchData(movieUrl,"movie",dispatch,setMovieData)
    },[])

    console.log(movieData)

  return (
    <div>{movieId}</div>
  )
}

export default MovieDetails
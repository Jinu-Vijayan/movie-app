import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../apiCall'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieData } from '../slice/movieSlice'
import { dispatch } from '../store/store'

// TODO
// Complete the movie details card by showing the data recieved inside the movieData variable in line 13 

const MovieDetails = () => {
    const {movieId} = useParams()
    const movieData = useSelector((state)=>state.movieSlice?.movieData)

    async function fetchMovieData(){
      const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}`
      const res = await fetchData(movieUrl,setMovieData)
      dispatch(setMovieData(res.data.results))
    }

    useEffect(()=>{
      fetchMovieData()
    },[])

    console.log(movieData)

  return (
    <div>{movieId}</div>
  )
}

export default MovieDetails
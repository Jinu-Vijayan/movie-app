import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const MovieCard = ({movieDetails}) => {

  const imageBaseUrl = useSelector((state)=>state.movieSlice?.configurations?.images?.base_url)
  const imageSize = useSelector((state)=>state.movieSlice?.configurations?.images?.poster_sizes[6])

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const date =new Date(movieDetails.release_date);

  return (
    <div className='w-[150px] text-white mr-3'>
        <NavLink to={`/movie/${movieDetails.id}`}>
            <img src={`${imageBaseUrl}${imageSize}${movieDetails.poster_path}`} className='h-[220px]'/>
            <div className='h-20'>
                <p className='text-nowrap overflow-hidden'>{movieDetails.title}</p>
                <p>{`${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</p>
            </div>
        </NavLink>
    </div>
        
  )
}

export default MovieCard
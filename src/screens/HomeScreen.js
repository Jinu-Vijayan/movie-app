import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTopRated } from '../slice/movieSlice';

const Header = () => {
  return(
    <div className='h-[76.5vh] flex flex-col justify-center items-center'>
        <h1 className='mb-5 text-5xl font-bold'>Welcome</h1>
        <p className='mb-10'>Millions of movies, TV shows and people to discover. Explore now.</p>
        <div className='flex justify-center items-center w-full'>
          <input placeholder='enter movie or show name' type='text'className='px-4 py-2 border border-slate-500 w-1/2 h-12 rounded-l-lg' />
          <button className='px-8 py-2 bg-blue-500 text-white cursor-pointer h-12 rounded-r-lg'>Search</button>
        </div>
    </div>
  )
}

const HomeScreen = () => {

  const token = process.env.REACT_APP_TOKEN;

  const topRated = useSelector((state)=> state.movieSlice.topRated)
  const dispatch = useDispatch();

  useEffect(()=>{
    const trendingUrl = `https://api.themoviedb.org/3/trending/movie/day`
    const option = {
      method : "GET",
      url : trendingUrl,
      headers : {
        accept : "application/json",
        Authorization : `Bearer ${token}`
      }
    }

    axios.request(option)
    .then((res)=>{
      dispatch(setTopRated(res.data.results))
    })
    .catch((error)=>{
      console.log(error)
    })

  },[])

  
  return (
    <main className='p-4 '>
      <Header/>
    </main>
  )
}

export default HomeScreen
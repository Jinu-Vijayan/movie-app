import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setConfigurations, setPopular, setTopRated, setTrending } from '../slice/movieSlice';
import CardsContainer from '../components/CardsContainer';
import fetchData from '../apiCall';

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


  const trendingFilterOptions = ["Day" , "Week"]
  const popularFilterOptions = ["Movies","TV Shows"]

  const dispatch = useDispatch();

  const [trendingFilter , setTrendingFilter] = useState("day")
  const [popularFilter, setPopularFilter] = useState("movies")
  const [topRatedFilter, setTopRatedFilter] = useState("movies")

  const popularType = {
    movies : "movie",
    "tv shows" : "tv"
  }

  useEffect(()=>{

    const configurationsUrl = 'https://api.themoviedb.org/3/configuration'
    fetchData(configurationsUrl,"config",dispatch,setConfigurations)

  },[])

  useEffect(()=>{

    const trendingUrl = `https://api.themoviedb.org/3/trending/movie/${trendingFilter}`

    fetchData(trendingUrl,"trending",dispatch,setTrending)

  },[trendingFilter])

  useEffect(()=>{

    const popularUrl = `https://api.themoviedb.org/3/${popularType[popularFilter]}/popular`

    fetchData(popularUrl,"popular",dispatch,setPopular)

  },[popularFilter])

  useEffect(()=>{
    
    const topRatedUrl = `https://api.themoviedb.org/3/${popularType[topRatedFilter]}/top_rated`

    fetchData(topRatedUrl,"topRated",dispatch,setTopRated)

  },[topRatedFilter])

  
  return (
    <main className='p-4 bg-slate-900 text-white '>

      <Header/>

      <CardsContainer containerType = {"Trending"} filterOptions = {trendingFilterOptions} dataStoredIn = 'trending' setFilter = {setTrendingFilter} />

      <CardsContainer containerType={"What's Popular"} dataStoredIn="popular" setFilter={setPopularFilter} filterOptions={popularFilterOptions}/>

      <CardsContainer containerType={"Top Rated"} dataStoredIn="topRated" setFilter={setTopRatedFilter} filterOptions={popularFilterOptions} />

    </main>
  )
}

export default HomeScreen
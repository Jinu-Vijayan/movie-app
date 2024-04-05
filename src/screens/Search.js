import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import fetchData from '../apiCall';
import { setMovieData, setSearchResults } from '../slice/movieSlice';
import MovieCard from '../components/MovieCard';
import { dispatch } from '../store/store';

const Search = () => {

    const {query} = useParams();
    const searchResults = useSelector((state)=> state.movieSlice.searchResults);
    const totalPages = useSelector((state)=>state.movieSlice.totalPages);
    const movieData = useSelector((state)=>state.movieSlice.movieData)
    const [page, setPage] = useState(2);

    useEffect(()=>{
        const queryBasedUrl = `https://api.themoviedb.org/3/search/multi?query=${query}&page=1`
        fetchData(queryBasedUrl,setMovieData);

    },[])

    useEffect(()=>{
        console.log("inifinite scroll")
        fetchDataForInfiniteScroll();
    },[page])

    useEffect(()=>{
        const newMovieData = [...movieData,...searchResults]
        setMovieData(newMovieData)

    },[searchResults])

    useEffect(()=>{
        console.log(movieData)
    },[movieData])

    function fetchDataForInfiniteScroll(){
        const pageAndQueryBasedUrl = `https://api.themoviedb.org/3/search/multi?query=${query}&page=${page}`;

        fetchData(pageAndQueryBasedUrl,setSearchResults);
    }

  return (
    <main className='p-4 bg-slate-900 text-white'>
        <h2 className='mb-4 text-2xl font-bold'>Search results for '{query}'</h2>

        <div className='flex flex-wrap'>
            {
                movieData.map((elem)=>{
                    return(
                        <MovieCard movieDetails={elem}/>
                    )
                })
            }
        </div>
        <div>
            <button onClick={()=>{
                setPage((prev)=> prev + 1);
            }}>Load More</button>
        </div>
    </main>
  )
}

export default Search
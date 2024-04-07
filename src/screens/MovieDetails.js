import React, { useEffect, useState } from 'react'
import { useParams,useLocation } from 'react-router-dom'
import fetchData from '../apiCall'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieData, setMovieDetails, setRecommended, setSimilarShows, setVideos } from '../slice/movieSlice'
import { dispatch } from '../store/store'
import VideoCardContainer from '../components/VideoCardContainer'
import CardsContainer from '../components/CardsContainer'

// TODO
// Complete the movie details card by showing the data recieved inside the movieData variable in line 13 

const MovieDetails = () => {

  let trailerLink = "";


  const {id} = useParams()
  const {pathname} = useLocation()
  const [trailerCode, setTrailerCode] = useState("")

  const cardType = pathname.split('/');
  // console.log(cardType[1])

  const movieDetails = useSelector((state)=> state.movieSlice.movieDetails);
  const videos = useSelector((state)=>state.movieSlice.videos);
  const similarShows = useSelector((state)=>state.movieSlice.similarShows);
  const recommended = useSelector((state)=>state.movieSlice.recommended)
  

  // console.log(pathname)

  async function fetchShowData(){
    const movieUrl = `https://api.themoviedb.org/3/${pathname}`
    const res = await fetchData(movieUrl)
    // console.log("server response for details",res)
    dispatch(setMovieDetails(res.data));
  }

  async function fetchSimilar(){
    const similarShowUrl = `https://api.themoviedb.org/3/${pathname}/similar`
    const res = await fetchData(similarShowUrl);
    // console.log("similar shows",res.data.results)
    dispatch(setSimilarShows(res.data.results))
  }

  async function fetchRecommeded(){
    const recommendedUrl = `https://api.themoviedb.org/3/${pathname}/recommendations`;
    const res = await fetchData(recommendedUrl);
    dispatch(setRecommended(res.data.results));
    // console.log("from recommended",res.data.results)
  }

  async function fetchVideos(){
    const videosUrl = `https://api.themoviedb.org/3/${pathname}/videos`
    const res = await fetchData(videosUrl);
    // console.log("from videos",res.data.results)
    dispatch(setVideos(res.data.results))

    const data = res?.data?.results.filter((elem)=>{
      if(elem.type === "Trailer"){
        return true;
      }
      return false;
    })

    // trailerLink = `https://www.youtube.com/watch?v=${data[0].key}`
    setTrailerCode(data[0]?.key)

  }

  useEffect(()=>{
    fetchShowData();
    fetchSimilar();
    fetchRecommeded();
    fetchVideos();
    return()=>{
      dispatch(setMovieDetails({}));
      dispatch(setSimilarShows([]));
      dispatch(setRecommended([]));
      dispatch(setVideos([]));
    }
  },[id])

  return (
    <main className='p-4 bg-slate-900 text-white '>
      <div className='flex justify-start gap-10 mb-4'>
        <div className='h-[70vh]'>
          <img className='h-full' src={movieDetails.poster_path !== null ? `http://image.tmdb.org/t/p/original${movieDetails.poster_path}` : '/assets/images/no-poster-available.png'} alt={`poster image for the show ${movieDetails.title || movieDetails.name}`}/>
        </div>
        <div className='w-[60%]'>
          <h2 className=' text-6xl mb-4'>{movieDetails.title || movieDetails.name}</h2>
          <div className='flex gap-3'>
            {movieDetails?.genres?.length > 0 &&
              movieDetails?.genres.map((elem)=>{
                return(
                  <div key={elem.value} className='px-2 py-1 bg-fuchsia-600 text-white rounded flex justify-center items-center'>
                    <p>{elem.name}</p>
                  </div>
                )
              })
            }
          </div>
          <div className='mt-4 flex items-center gap-8'>
            <p>Rating:{movieDetails.vote_average}</p>
            {
              trailerCode ? 
            <a className='cursor-pointer px-5 py-2 bg-blue-500 rounded hover:bg-blue-700' href={`https://www.youtube.com/watch?v=${trailerCode}`} target='_blank'>Watch Trailer</a>
            : <p>No trailer avialable</p>
            }
          </div>
          <div className='border border-x-0 mt-3 border-inherit'>
            <p className='text-2xl font-bold'>Overview :</p>
            <p>{movieDetails.overview}</p>
          </div>
        </div>
      </div>
      <VideoCardContainer/>
      <CardsContainer containerType={"Similar Shows"} filterOptions={[]} dataStoredIn={"similarShows"} cardType={cardType[1]} />
      <CardsContainer containerType={"Recommended"} filterOptions={[]} dataStoredIn={"recommended"} cardType={cardType[1]} />
    </main>
  )
}

export default MovieDetails
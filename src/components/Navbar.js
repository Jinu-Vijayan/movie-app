import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <div>
                <NavLink to={'/'} ><li>Movie image</li></NavLink>
                
            </div>
            <div>
                <NavLink to={"/explore/movie"} ><li>Movies</li></NavLink>
                <NavLink to={"/explore/tvShow"} ><li>TV Show</li></NavLink>
            </div>
        </ul>
    </div>
  )
}

export default Navbar
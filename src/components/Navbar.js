import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className='p-5 bg-black text-white fixed z-10 w-full'>
        <ul className='flex justify-between cursor-pointer items-center'>
            <div>
                <NavLink to={'/'} >
                  <li>
                    <img src={logo} alt='the logo of the movie data base' className='h-10 h w-auto'/>
                  </li>
                </NavLink>
                
            </div>
            <div className='flex gap-5'>
                <NavLink to={"/explore/movie"} ><li>Movies</li></NavLink>
                <NavLink to={"/explore/tvShow"} ><li>TV Show</li></NavLink>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar
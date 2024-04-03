import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const AppTemplate = () => {
  return (
    <div>
        <Navbar/>
        <div className='h-20 mb-1'></div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppTemplate
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='p-4 relative flex flex-col w-full min-h-screen'>
    <div className="bg-white" >
      <Header />
      <Outlet />

    </div>
      
    </div>
  )
}

export default Layout

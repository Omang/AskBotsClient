import React from 'react'
import { Link } from 'react-router-dom'
import { FaFirstdraft, FaReadme, FaCodiepie } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='mb-2'>
      <nav className='flex flex-row gap-8  px-2    justify-around'>
         <Link to={'/student'} className='font-bold hover:border-b hover:border-blue-500 px-2  text-blue-900 justify-around flex'><FaFirstdraft />Students</Link>
         <Link to={'/public'} className='font-bold hover:border-b hover:border-blue-500 px-2  text-blue-900 justify-around flex'><FaReadme />Public</Link>
         <Link to={'/developer'} className='font-bold hover:border-b hover:border-blue-500 px-2  text-blue-900 justify-around flex'><FaCodiepie />Developers</Link>
      </nav>
    </div>
  )
}

export default Navbar

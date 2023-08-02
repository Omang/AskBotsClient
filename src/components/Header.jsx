import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' bg-white sticky  top-0 bottom-0'>
      <div className="flex justify-center items-center">
        <Link to={'/'} className="flex flex-row text-black font-bold text-2xl gap-1 underline mb-1">
            <h5 className='mx-auto'>Ask ME</h5><p className='mt-4 mx-auto text-xs text-gray-600 font-serif'>Anything about Botswana Only</p>
        </Link>
      </div>
      <div className="flex flex-row justify-between mt-8 mb-1">
        
      </div>
    </div>
  )
}

export default Header

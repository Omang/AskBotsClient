import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import Message from './Message'


const MainLayout = ({welcome}) => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([
    {
      title: 'x',
      message: 'Your message'
    },
    {
      title: 'y',
      message: 'response message'
    }
  ])
  const {pathname} = useLocation();
  let subpage = pathname.split('/')?.[1];
  console.log(subpage);

  return (
    <div>
    <div className=" flex md:flex-row w-full mx-auto">
        <div  className="  hidden md:w-1/4 min-h-screen bg-gray-400 md:border-r md:border-green-500 md:shadow-xl md:block">
          <div onClick={()=>setData('')} className='cursor-pointer border m-2 rounded-lg p-2 text-white  bg-gray-600'><h1 className='mx-16'>New Chat</h1></div>
        </div>
        <div className=' md:w-3/4 flex-col min-h-screen mx-auto w-full bg-gray-300  md:shadow-xl md:border'>
          <div className=" mt-2">
           <div className=" bg-gray-600 p-8 border rounded-xl mx-4 ">
                <p className='text-white justify-start font-semibold'>{welcome}.</p>
           </div>
          </div>
          <div className=" mt-2">
           <Message data={data} />
          </div>
          <div className='relative mt-4 p-8 
             mx-4'>
            <input className='bg-white border rounded-xl text-black absolute bottom-0 top-0 left-0 right-0' 
            type='text'
            placeholder='Type your question and press enter' value={input} onChange={e=>setInput(e.target.value)}  />
          </div>
           
          
        </div>
      </div>
    </div>
  )
}

export default MainLayout

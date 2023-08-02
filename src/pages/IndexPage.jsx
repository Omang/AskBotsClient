import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Message from '../components/Message'
import { Link} from 'react-router-dom'
import ScrollArea from 'react-scrollbar'
import {nanoid} from 'nanoid';

const IndexPage = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([
    {
      title: 'x',
      message: 'Welcome Client. Ask me about anything related to Botswana'
    }
  ])

  const handleSubmit =async(e)=>{
    e.preventDefault();
     console.log(input);
     let me = [...data, {title:'y', message:`${input}`}];
     setData(me);
    try{

      const response =await axios.post('/',{datax:input});
      
      setData(prev=>[...prev, {title:'x', message:`${response.data.message.content}`}]);
      setInput('');
    }catch(e){
      console.log(e);
    }
     
  }
  return (
    <div className='  '>
       <div className="absolute flex md:flex-row p-8 w-full ">
        <div  className="  hidden md:w-1/4 min-h-screen bg-gray-400 md:border-r md:border-green-500 md:shadow-xl md:block">
          <div onClick={()=>setData('')} className='cursor-pointer border m-2 rounded-lg p-2 text-white  bg-blue-600'><h1 className='mx-16'>New Chat</h1></div>
        </div>
        
        <div className=' md:w-3/4 flex-col min-h-screen mx-auto w-full bg-gray-300  md:shadow-xl md:border'>
          <div className='md:hidden sticky z-50 top-5 bottom-0 px-8'>
        <div onClick={()=>setData('')} className='cursor-pointer border m-2 rounded-lg p-2 text-white  bg-blue-600'><h1 className='mx-16'>New Chat</h1></div>

          </div>
          <ScrollArea speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            vertical={true}>
          <div className=" mt-2">
           {
            data && data.map(message=>(
              <Message key={nanoid()} index={nanoid()} message={message} />
            ))
           }
          </div>
          <div className='relative mt-4 p-8 
             mx-4'>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <input className='bg-white border rounded-xl text-black absolute bottom-0 top-0 left-0 right-0' 
            type='text'
            placeholder='Type your question and press enter' value={input} onChange={e=>setInput(e.target.value)}  />
            </form>
          </div>
          </ScrollArea> 
          
        </div>
        
      </div>
    </div>
  )
}

export default IndexPage

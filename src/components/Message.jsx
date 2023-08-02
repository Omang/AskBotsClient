import React from 'react'
import {nanoid} from 'nanoid';

const Message = ({index, message}) => {

    const setMessage =(type)=>{
        if(type === 'x'){
             return 'bg-gray-600';
        }else{
             return 'bg-gray-400';
        }
    }
  return (
    <div>
      <div key={index} className={`${setMessage(message.title)} mb-4  p-8 border rounded-xl mx-4`}>
        <p className='text-white justify-start font-semibold'>{message.message}</p>
       </div>
    </div>
  )
}

export default Message

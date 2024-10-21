import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiStarLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

function Message() {

     const navigate = useNavigate();

     const openMail = () => {
          navigate("mail/12242dre4f")
     }
     return (
          <div onClick={openMail} className='flex items-start justify-between border-b  border-gray-100 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md'>
               <div className='flex items-center gap-3'>
                    <div className='flex-none text-gray-300'>
                         <MdCropSquare className='w-5 h-5'></MdCropSquare>
                    </div>
                    <div className='flex-none text-gray-300'>
                         <RiStarLine className='w-5 h-5'></RiStarLine>
                    </div>
               </div>
               {/* <div>
          <h1 className='font-semibold'>{MdEmail.to}</h1>
     </div> */}
               <div className='flex-1 ml-4'>
                    <p className='text-gray-800 truncate inline-block max-w-full'> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
               </div>
               <div className='flex-none text-gray-900 text-sm'>
                    Time of Email
               </div>

          </div>
     )
}

export default Message
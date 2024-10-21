import React, { useState } from 'react'
import { FaCaretDown, FaUserFriends } from 'react-icons/fa'
import { GoTag } from 'react-icons/go'
import { IoMdMore, IoMdRefresh } from 'react-icons/io'
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Messages from './Messages'

const mailType = [
     {
          icon: <MdInbox size={"20px"}></MdInbox>,
          text: "Primary"
     },
     {
          icon: <GoTag size={"20px"}></GoTag>,
          text: "Promotions"
     },
     {
          icon: <FaUserFriends size={"20px"}></FaUserFriends>,
          text: "Social"
     }
]

function Inbox() {
     const [mailTypeSelected, setmailTypeSelected] = useState(0);
     return (
          <div className='flex-1  bg-white rounded-xl mx-5'>
               <div className='flex items-center justify-between px-4'>
                    <div className='flex items-center gap-2 py-2 text-gray-700'>
                         <div className='flex items-center gap-1'>
                              <MdCropSquare size={'20px'}></MdCropSquare>
                              <FaCaretDown size={'20px'}></FaCaretDown>
                         </div>
                         <div className='p-2 rounded-full hover:bg-gray-100'>
                              <IoMdRefresh size={'20px'} />
                         </div>
                         <div className='p-2 rounded-full hover:bg-gray-100'>
                              <IoMdMore size={'20px'} />
                         </div>
                    </div>
                    <div className='flex items-center gap-2'>
                         <p className='text-sm text-gray-600'>
                              1-50 of 1000
                         </p>
                         <button>
                              <MdKeyboardArrowLeft size={'24px'}></MdKeyboardArrowLeft>
                         </button>
                         <button>
                              <MdKeyboardArrowRight size={'24px'}></MdKeyboardArrowRight>
                         </button>

                    </div>
               </div>
               <div className='h-[90vh] overflow-y-auto'>
                    <div className='flex items-center gap-1'>
                         {
                              mailType.map((item, index) => {
                                   return (<button
                                        key={index}
                                        className={`flex items-center gap-5 p-4 ${mailTypeSelected === index ? 'border-b-4 border-blue-400 text-purple-500' : 'border-b-4 border-b-transparent'}  w-52 hover:bg-gray-100`}
                                        onClick={() => { setmailTypeSelected(index) }}
                                   >
                                        {item.icon}
                                        <span>
                                             {item.text}
                                        </span>

                                   </button>
                                   )
                              })
                         }
                    </div>
                    <Messages></Messages>
               </div>
          </div>
     )
}

export default Inbox
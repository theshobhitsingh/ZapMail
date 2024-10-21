import React, { useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import { LuPencil, LuPenTool } from 'react-icons/lu'
import { MdOutlineDrafts, MdOutlineWatchLater } from 'react-icons/md'
import { TbSend2 } from 'react-icons/tb'
import { HiInboxArrowDown } from "react-icons/hi2";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { useDispatch } from 'react-redux'

const sidebarItems = [
     {
          icon: <HiInboxArrowDown size={"20px"} />,
          text: "Inbox"
     },
     {
          icon: <IoMdStar size={"20px"} />,
          text: "Starred"
     },
     {
          icon: <MdOutlineWatchLater size={"20px"} />,
          text: "Snoozed"
     },
     {
          icon: <TbSend2 size={"20px"} />,
          text: "Sent"
     },
     {
          icon: <MdOutlineDrafts size={"20px"} />,
          text: "Draft"
     },
     {
          icon: <MdOutlineKeyboardDoubleArrowDown size={"20px"} />,
          text: "More"
     }
]

function Sidebar() {
     // const [open, setOpen] = useState(false);
     const dispatch = useDispatch();
     return (
          <div className='w-[15%]'>
               <div className='p-3'>
                    <button onClick={() => dispatch(setOpen(true))} className='flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md'>
                         <LuPencil size={"24px"} />
                         Compose
                    </button>
               </div>

               <div className='text-black'>
                    {
                         sidebarItems.map((item, index) => {
                              return (
                                   <div className='flex items-center gap-4 pl-6 py-1  rounded-r-full hover:cursor-pointer hover:bg-slate-300 my-2 '>
                                        {item.icon}
                                        <p>{item.text}</p>
                                   </div>
                              )
                         })
                    }
               </div>

          </div>
     )
}

export default Sidebar
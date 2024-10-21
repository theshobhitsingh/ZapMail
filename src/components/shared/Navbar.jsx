import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from 'react-icons/io';
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from 'react-avatar';
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineQuestionMark } from "react-icons/md";

function Navbar() {
     return (
          <div className='flex items-center justify-between mx-3 h-16'>
               <div className='flex items-center gap-10'>
                    <div className='flex items-center gap-2'>
                         <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                              <GiHamburgerMenu size={'22px'} />
                         </div>
                         <img className='w-8' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fblack-email-icon-34.png&f=1&nofb=1&ipt=f4b10a420d3315812040d915a3a9f9727f99a00a5c74ec64d5e5da64ca29e062&ipo=images" alt="Logo" />
                         <h1 className='text-2xl text-gray-600 font-medium'>ZapMail</h1>
                    </div>
               </div>
               <div className='md:block hidden w-[50%] mr-60'>
                    <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
                         <IoIosSearch size={'24px'} className='text-gray-700' />
                         <input type="text" className='rounded-full w-full bg-transparent outline-none px-1' placeholder='Search for Emails' />
                    </div>
               </div>
               <div className='md:block hidden'>
                    <div className='flex items-center gap-2'>
                         <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                              <MdOutlineQuestionMark size={"22px"} />
                         </div>
                         <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                              <MdOutlineSettings size={"22px"} />
                         </div>
                         <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                              <PiDotsNineBold size={"22px"} />
                         </div>
                         <div className='cursor-pointer'>
                              <Avatar src="https://cdn1.iconfinder.com/data/icons/user-pop-culture/512/Batman-512.png" size="40" round={true} />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Navbar
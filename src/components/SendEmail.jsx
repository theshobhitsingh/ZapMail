import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/appSlice';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const SendEmail = () => {
     const [formData, setFormData] = useState({
          recipients: "",
          subject: "",
          message: ""
     });
     const { open } = useSelector(store => store.app);
     const dispatch = useDispatch();

     const changeEventHandler = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
     }

     const submitHandler = async (e) => {
          e.preventDefault();
          await addDoc(collection(db, "emails"), {
               to: formData.recipients,
               subject: formData.subject,
               message: formData.message,
               createdAt: serverTimestamp(),
          });
          dispatch(setOpen(false));
          setFormData({
               recipients: "",
               subject: "",
               message: ""
          });
     }

     return (
          <div className={`${open ? 'block' : 'hidden'} bg-gray-800 text-white max-w-md shadow-xl rounded-md`}>
               <div className='flex px-4 py-3 items-center justify-between border-b border-gray-700'>
                    <h1 className='text-lg font-semibold'>New Message</h1>
                    <div onClick={() => dispatch(setOpen(false))} className='p-2 rounded-full hover:bg-gray-700 cursor-pointer'>
                         <RxCross2 />
                    </div>
               </div>
               <form onSubmit={submitHandler} className='flex flex-col p-4 gap-3'>
                    <input 
                         onChange={changeEventHandler} 
                         name="recipients" 
                         value={formData.recipients} 
                         type="text" 
                         placeholder='Recipients' 
                         className='bg-gray-700 text-white outline-none py-2 px-3 rounded-md'
                    />
                    <input 
                         onChange={changeEventHandler} 
                         name="subject" 
                         value={formData.subject} 
                         type="text" 
                         placeholder='Subject' 
                         className='bg-gray-700 text-white outline-none py-2 px-3 rounded-md'
                    />
                    <textarea 
                         onChange={changeEventHandler} 
                         name="message" 
                         value={formData.message} 
                         cols="30" 
                         rows="5" 
                         placeholder='Message' 
                         className='bg-gray-700 text-white outline-none py-2 px-3 rounded-md'
                    />
                    <button 
                         type='submit' 
                         className='bg-blue-600 hover:bg-blue-500 rounded-full px-4 py-2 text-white font-medium transition duration-200'
                    >
                         Send
                    </button>
               </form>
          </div>
     )
}

export default SendEmail;

import React, { useEffect, useState } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Avatar from 'react-avatar';
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser, setSearchText } from '../redux/appSlice';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
     const [search, setSearch] = useState("");
     const [toggle, setToggle] = useState(false);
     const dispatch = useDispatch();
     const { authUser } = useSelector(store => store.app);

     const signOutHandler = () => {
          signOut(auth).then(() => {
               dispatch(setAuthUser(null));
          }).catch((error) => {
               console.log(error);
          });
     };

     useEffect(() => {
          dispatch(setSearchText(search));
     }, [search]);

     return (
          <div className='navbar-container'>
               <div className='navbar-left'>
                    <div className='navbar-logo'>
                         <div className='hamburger'>
                              <RxHamburgerMenu size={'20px'} />
                         </div>
                         <img className='logo halo' src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fweb-email-icon%2Fweb-email-icon-2.jpg&f=1&nofb=1&ipt=531cd02bb2f19b05f7de57ec63ff668aaa49afd88ffa49deb61e7c9141a818dd&ipo=images"} alt="Logo" />
                         <h1 className='app-name'>𝙕𝙖𝙥𝐌𝐚𝐢𝐥</h1>
                    </div>
               </div>
               <div className='search-bar'>
                    <IoIosSearch size="24px" className='search-icon' />
                    <input
                         type="text"
                         value={search}
                         onChange={(e) => setSearch(e.target.value)}
                         placeholder='Search mail'
                         className='search-input'
                    />
               </div>
               <div className='navbar-right'>
                    <div className='icon-container'>
                         <FaRegQuestionCircle size={"20px"} />
                    </div>
                    <div className='icon-container'>
                         <IoSettingsOutline size={"20px"} />
                    </div>
                    <div className='icon-container'>
                         <PiDotsNineBold size={"20px"} />
                    </div>
                    <div className='avatar-container'>
                         <Avatar onClick={() => setToggle(!toggle)} src={authUser?.photoURL} googleId="118096717852922241760" size="40" round={true} />
                         <AnimatePresence>
                              {toggle && (
                                   <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.1 }}
                                        className='dropdown-menu'>
                                        <p onClick={signOutHandler} className='logout'>LogOut</p>
                                   </motion.div>
                              )}
                         </AnimatePresence>
                    </div>
               </div>

               <style jsx>{`
                .navbar-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: #1E1E2F; /* Dark background */
                    color: #B0BEC5; /* Light gray text */
                    padding: 0 1rem;
                    height: 64px;
                }

                .navbar-left {
                    display: flex;
                    align-items: center;
                }

                .navbar-logo {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .hamburger {
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: background-color 0.2s;
                }

                .hamburger:hover {
                    background-color: rgba(255, 255, 255, 0.1); /* Light hover effect */
                }

                .logo {
                    width: 32px;
                }

                .halo {
                    box-shadow: 0 0 20px rgba(0, 150, 255, 0.7); /* Halo effect */
                    border-radius: 50%; /* Ensure the halo follows the shape */
                }

                .app-name {
                    font-size: 24px;
                    color: #B0BEC5; /* Light gray */
                }

                .search-bar {
                    display: flex;
                    align-items: center;
                    background-color: #EAF1FB; /* Light blue background */
                    border-radius: 20px;
                    padding: 0.5rem;
                    width: 50%;
                    max-width: 400px;
                    margin: 0 auto;
                }

                .search-icon {
                    color: #333;
                }

                .search-input {
                    border: none;
                    background: transparent;
                    outline: none;
                    padding: 0.5rem;
                    width: 100%;
                    color: #333; /* Dark text for input */
                }

                .navbar-right {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .icon-container {
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: background-color 0.2s;
                }

                .icon-container:hover {
                    background-color: rgba(255, 255, 255, 0.1); /* Light hover effect */
                }

                .avatar-container {
                    position: relative;
                }

                .dropdown-menu {
                    position: absolute;
                    right: 0;
                    z-index: 20;
                    background-color: #fff; /* White background for dropdown */
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                }

                .logout {
                    padding: 0.5rem 1rem;
                    cursor: pointer;
                    text-align: center;
                    color: white; /* White text */
                    background-color: #e63946; /* Red background */
                    border-radius: 8px; /* Rounded corners */
                    transition: background-color 0.3s, transform 0.2s; /* Smooth transition */
                }

                .logout:hover {
                    background-color: #d62839; /* Darker red on hover */
                    transform: scale(1.05); /* Slightly scale up on hover */
                }

                .logout:active {
                    transform: scale(0.95); /* Slightly scale down on click */
                }
            `}</style>
          </div>
     );
};

export default Navbar;

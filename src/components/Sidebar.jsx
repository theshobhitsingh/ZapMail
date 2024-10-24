import React, { useState } from 'react';
import { LuPencil } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { MdOutlineWatchLater, MdOutlineKeyboardArrowDown, MdOutlineDrafts, MdInbox } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';
import { MdOutlineStarRate } from "react-icons/md";
import { FaInbox } from "react-icons/fa";
import { BiSolidAlarmSnooze } from "react-icons/bi";
import { MdDrafts } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { MdOutlineUnfoldMoreDouble } from "react-icons/md";
import { FaPenClip } from "react-icons/fa6";

const sidebarItems = [
    {
        icon: <FaInbox
            size={"20px"} />,
        text: "Inbox"
    },
    {
        icon: <MdOutlineStarRate size={"20px"} />,
        text: "Starred"
    },
    {
        icon: <BiSolidAlarmSnooze size={"20px"} />,
        text: "Snoozed"
    },
    {
        icon: <IoIosSend size={"20px"} />,
        text: "Sent"
    },
    {
        icon: <MdDrafts
            size={"20px"} />,
        text: "Drafts"
    },
];

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const dispatch = useDispatch();

    return (
        <div className='sidebar-container'>
            <div className='p-3'>
                <button onClick={() => dispatch(setOpen(true))} className='compose-button'>
                    <FaPenClip size={"24px"} />
                    Compose
                </button>
            </div>
            <div className='sidebar-items'>
                {
                    sidebarItems.map((item, idx) => (
                        <div
                            onClick={() => setSelected(idx)}
                            key={idx}
                            className={`sidebar-item ${selected === idx ? 'active' : ''}`}
                        >
                            {item.icon}
                            <p>{item.text}</p>
                        </div>
                    ))
                }
                <div className='more-item'>
                    <MdOutlineUnfoldMoreDouble size={"20px"} />
                    <span>More</span>
                </div>
            </div>

            <style jsx>{`
                .sidebar-container {
                    width: 15%;
                    background-color: #1E1E2F; /* Dark background */
                    color: #B0BEC5; /* Light gray text */
                    height: 100vh; /* Full height */
                }

                .compose-button {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background-color: #007BFF; /* Blue background */
                    color: white; /* White text */
                    padding: 1rem;
                    border-radius: 12px; /* Rounded edges */
                    transition: box-shadow 0.2s;
                    width: 100%; /* Full width */
                }

                .compose-button:hover {
                    box-shadow: 0 2px 10px rgba(0, 123, 255, 0.5); /* Shadow on hover */
                }

                .sidebar-items {
                    margin-top: 1rem; /* Space from Compose button */
                }

                .sidebar-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 0.75rem 1rem;
                    border-radius: 12px; /* Rounded edges */
                    transition: background-color 0.2s, color 0.2s;
                }

                .sidebar-item:hover {
                    background-color: rgba(255, 255, 255, 0.1); /* Light hover effect */
                    color: white; /* White text on hover */
                }

                .sidebar-item.active {
                    background-color: #007BFF; /* Blue for selected item */
                    color: white; /* White text for active */
                }

                .more-item {
                    display: flex;
                    align-items: center;
                    padding: 0.75rem 1rem;
                    border-radius: 12px; /* Rounded edges */
                    transition: background-color 0.2s;
                }

                .more-item:hover {
                    background-color: rgba(255, 255, 255, 0.1); /* Light hover effect */
                    color: white; /* White text on hover */
                }
            `}</style>
        </div>
    );
};

export default Sidebar;

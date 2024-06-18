import React from 'react'
import './Home.css'
import { GoSidebarExpand } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
const Home = () => {
    
    return (
        <div className='home'>
            <div className='sidebar'>
                <div className='sidebar-icons-div'>
                    <GoSidebarExpand onClick={closeSidebar} className='sidebar-icons' />
                    <FaEdit className='sidebar-icons' />
                </div>
            </div>
            <div className='search-area'>
                <div className='input-div'>
                    <input placeholder='Message ChatGPT' />
                    <p>ChatGPT can make mistakes. Check important info.</p>
                </div>
            </div>
        </div>
    )
}

export default Home
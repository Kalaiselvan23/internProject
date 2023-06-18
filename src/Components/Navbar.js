import React from 'react'
import {IoMdSettings} from "react-icons/io";
import {IoNotificationsSharp} from "react-icons/io5"

const Navbar = () => {
  return (
    <div className='bg-[#1D1F25] text-white flex justify-between p-4 border-b-2 border-white'> 
    <div className='flex items-center gap-7 my-auto mx-8'>
        <img src="/assets/logo.png" alt="" className="w-56"/>
        <ul className='flex items-center w-80 justify-evenly text-sm font-semibold mx-7 nav-link'>
            <li>Home</li>
            <li>About</li>                    
            <li>Work</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        </div>
        <div className='flex w-56 items-center justify-evenly text-xl text-[#757B8C]' >
        <IoMdSettings className='hover:text-white'/>
        <IoNotificationsSharp className='hover:text-white'/>
        <span>
            <img src="/assets/Ellipse_1.svg" className='w-8' alt=""/>
        </span>
        </div>
    </div>
  )
}

export default Navbar
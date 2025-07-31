import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegMoon } from "react-icons/fa";
import { RxSun } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Sidebar from '../pages/nav/Navbar';




const Header = ({darkMode, toggleDarkMode, isMenuBarOpen, setIsMenuBarOpen}) => {
  return (
    <section className='pb-[63px] md:pb-[61px]'>
    <div className='fixed top-0 left-0 w-full bg-slate-100 text-black dark:bg-slate-900 dark:text-white flex justify-between items-center p-3 border-b border-gray-300 shadow-md z-50 pl-2 sm:pl-4 sm:pr-4 md:pl-8 md:pr-8'>

      <div className='flex items-center gap-2'>

        <div className='inline-flex items-center p-1 text-3xl text-gray-700 rounded-lg sm:hidden hover:bg-gray-200 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-700 dark:focus:ring-gray-600 focus:ring-1 transition-all duration-300 cursor-pointer' onClick={()=>{setIsMenuBarOpen(!isMenuBarOpen)}}> {isMenuBarOpen ? <IoMdClose /> : <HiMenuAlt2 /> } </div>
        {/* {isMenuBarOpen ? <Sidebar /> : ""} */}

        <div className='text-purple-700 text-2xl flex items-center gap-2'><a href='#'><BiSolidDashboard /></a> <span className='text-stone-950 dark:text-yellow-50 font-medium tracking-wider text-xl sm:text-2xl'>Admin</span></div>
      </div>

      <div>
        <button className='bg-slate-200 p-2 rounded-full text-xl dark:bg-slate-950' onClick={toggleDarkMode}>
          {darkMode? <RxSun /> : <FaRegMoon />}
        </button>
      </div>

    </div>
      </section>
  )
}

export default Header
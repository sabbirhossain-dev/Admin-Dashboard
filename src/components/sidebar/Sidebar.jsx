import React from 'react'

import { Link, NavLink} from 'react-router-dom'
// import Dashboard from '../pages/Dashboard'
// import Users from '../pages/Users'
// import Inbox from '../pages/Inbox'
// import Products from '../pages/Products'
// import SignIn from '../pages/SignIn'
// import SignOut from '../pages/SignOut'
import { FaFacebookMessenger } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";




const Sidebar = ({isMenuBarOpen}) => {
  return (
    <>
       <ul className={`absolute top-18 z-40 left-0 sm:static w-[240px] h-screen md:h-auto md:w-[260px] lg:w-[280px] border-r bg-gray-100 border-b border-gray-200 sm:translate-x-0 transition-transform dark:bg-gray-900 dark:border-gray-700 ${isMenuBarOpen ? "translate-x-0" : "-translate-x-full"} `}>
        {/* {links.map(({icon,href,text})=>{
        return <NavItem icon={icon} href={href} text={text} />

        })} */}
        <li className='flex flex-col pl-5 pt-3 text-md text-gray-900 dark:text-gray-50 font-medium cursor-pointer justify-center'>
          <NavLink to="/" className="shadow-sm p-3 flex gap-3 items-center"><span><MdSpaceDashboard /></span>Dashboard
          </NavLink>

          <NavLink to="/inbox" className="shadow-sm p-3 flex gap-3 items-center "><span className=''><TiMessages /></span>Inbox</NavLink>

          <NavLink to="/users"  className="shadow-sm p-3 flex gap-3 items-center "><span className=''><FaUsers /></span>Users</NavLink>

          <NavLink to="/products"  className="shadow-sm p-3 flex gap-3 items-center "><span className=''><FaListAlt /></span>Products</NavLink>

          <NavLink to="/signin"  className="shadow-sm p-3 flex gap-3 items-center "><span className=''><IoIosLogIn /></span>Sign In</NavLink>

          <NavLink to="/signout"  className="shadow-sm p-3 flex gap-3 items-center "><span className=''><CiLogin /></span>Sign Out</NavLink>
        </li>
    </ul> 
    </>
  )
}

export default Sidebar
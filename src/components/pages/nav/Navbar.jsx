import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul className='w-[250px] sm:w-[280px] p-6 pt-3 h-screen bg-gray-100 flex flex-col gap-3'>
            <NavLink to='/'>DashBoard</NavLink>
            <NavLink to='/inbox'>Inbox</NavLink>
            <NavLink to='/'>DashBoard</NavLink>
            <NavLink to='/'>DashBoard</NavLink>
            <NavLink to='/signin'>DashBoard</NavLink>
            <NavLink to='/'>DashBoard</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar
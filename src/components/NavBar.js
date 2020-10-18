import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    
    return (
        <nav>
            {/* link here */}
            <NavLink to='/'>Home</NavLink>
            <ul>
                {/* more links */}
                <li><NavLink to='/timers' >Timers</NavLink></li>
                <li><NavLink to='/timers/new' >Create Timer</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar

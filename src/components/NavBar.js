import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {
    render() {
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
}

export default Navbar

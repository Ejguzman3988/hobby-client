import React from 'react';
import {NavLink} from 'react-router-dom'
const TimerCard = ({timer: {id, name, start_time, end_time, total_time, date}}) => {
    return(<li>
        <div>
            <NavLink to={`/timers/${id}`}><h3>{name} - {date}</h3></NavLink>
            <p>Start: {start_time.split("T")[1]}</p>
            <p>End: {end_time.split("T")[1]}</p>
            <p>Total: {total_time/3600} HRS</p>
        </div>
    </li>)
}

export default TimerCard;

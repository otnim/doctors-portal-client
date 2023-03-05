import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLeftNavBar = () => {
    return (
        <ul className=''>
            <li> <Link to='/dashboard/my-appointment' className='btn btn-ghost normal-case text-accent'> My Appointment </Link></li>
            <li> <Link to='/dashboard/my-appointment' className='btn btn-ghost normal-case text-accent'> My Appointment </Link></li>
            <li> <Link to='/dashboard/my-appointment' className='btn btn-ghost normal-case text-accent'> My Appointment </Link></li>
        </ul>
    );
};

export default DashboardLeftNavBar;
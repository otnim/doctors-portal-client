import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardLeftNavBar from '../pages/shared/navbar/DashboardLeftNavBar';
import Navbar from '../pages/shared/navbar/Navbar';

const DashboardMain = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex'>
                <div className='w-full lg:w-1/6 border border-indigo-600'>
                    <DashboardLeftNavBar></DashboardLeftNavBar>
                </div>
                <div className='w-full lg:w-5/6 border border-indigo-900 bg-base-200'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardMain;
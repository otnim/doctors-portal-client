import React from 'react';
import ImageChair from '../../../assets/images/chair.png';
import Calender from './Calender';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <div className="hero bg-homeBackground mb-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={ImageChair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div className='lg:w-1/2 flex justify-center'>
                    <Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate}></Calender>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
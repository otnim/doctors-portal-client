import { format } from 'date-fns';
import React from 'react';
import DateModal from './DateModal';

const MyAppointment = () => {
    return (
        <div className='p-10'>
            <div className='flex justify-between'>
                <div className='text-xl'>
                    My Appointment
                </div>
                <div>
                    <label htmlFor="date-modal" className='btn btn-outline'>
                         {format(new Date(), 'PP')} 
                    </label>
                </div>

            </div>
            <DateModal></DateModal>
        </div>
    );
};

export default MyAppointment;
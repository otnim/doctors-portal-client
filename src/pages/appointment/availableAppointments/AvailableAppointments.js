import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    useEffect(() => {
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data));
    }, [])

    console.log(appointmentOptions);

    return (        
        <div className='mt-16'>
            <p className='text-center font-bold text-primary'> Available Services on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointmentOptions.map(option => {
                        return <AppointmentOption key={option._id} option={option}></AppointmentOption>
                    })
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;
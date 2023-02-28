import React, { useState } from 'react';
import AppointmentBanner from '../appointmentBanner/AppointmentBanner';
import AvailableAppointments from '../availableAppointments/AvailableAppointments';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            >
            </AppointmentBanner>
            
            <AvailableAppointments selectedDate={selectedDate}></AvailableAppointments>
        </div>
    );
};

export default Appointment;
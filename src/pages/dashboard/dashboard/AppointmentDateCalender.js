import React, { useState } from 'react';
import { format} from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentDateCalender = () => {
    const [selectedDate, setSelectedDate] = useState(format (new Date(), 'PP'));
    let calenderFooter = <p> Please pick a day </p>;
    console.log(selectedDate);

    return (
        <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            footer={calenderFooter}
        />
    );
};

export default AppointmentDateCalender;

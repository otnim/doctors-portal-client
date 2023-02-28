import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = ({selectedDate, setSelectedDate}) => {
    //console.log(selectedDate, setSelectedDate);
    let calenderFooter = <p> Please pick a day </p>;
    if (selectedDate) {
        calenderFooter = <p> You have picked {format(selectedDate, 'PP')} </p>
    }

    return (
        <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            footer={calenderFooter}
        />
    );
};

export default Calender;

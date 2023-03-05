import React from 'react';
import AppointmentDateCalender from './AppointmentDateCalender';

const DateModal = () => {
    const handleDate = event => {
        event.preventDefault();
        console.log("Hello Dateeeeeeee");
        const date = {
            
        }
    }
    return (
        <>
            <input type="checkbox" id="date-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="date-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <AppointmentDateCalender></AppointmentDateCalender>
                </div>
            </div>
        </>
    );
};

export default DateModal;
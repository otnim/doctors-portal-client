import React from 'react';
import ButtonPrimary from '../../../components/buttonPrimary/ButtonPrimary';

const AppointmentOption = ({ option }) => {
    const { name, slots } = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-3xl text-primary"> {name} </h2>
                <p className='font-bold'>{slots.length > 0 ? slots[0] : "Try Another Day"} </p>
                <p className='font-bold'>{slots.length} {slots.length > 1 ? "Slots" : "Slot"} Available</p>
                <div>
                    <ButtonPrimary> Book Appointment </ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;
import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;

    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-3xl text-primary"> {name} </h2>
                <p className='font-bold'>{slots.length > 0 ? slots[0] : "Try Another Day"} </p>
                <p className='font-bold'>{slots.length} {slots.length > 1 ? "Slots" : "Slot"} Available</p>
                <div>
                    <label htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(option)}
                        disabled={!slots.length}
                    >Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;
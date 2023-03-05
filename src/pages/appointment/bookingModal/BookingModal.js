import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment; // appointmentOption er different name deya hoyeche 'treatment'
    const {user} = useContext(AuthContext);
    //console.log("mail: ", user.email);

    const handleBooking = event => {
        event.preventDefault();
        const patientName = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const date = event.target.date.value;
        const slot = event.target.slot.value;
        const booking = {
            patientName,
            email,
            phone,
            treatment: name,
            appointmentDate: date,
            slot,
        }
        console.log(booking);
        //todo: send data to server

        //once data is sent then set treatment 'null' to close the modal
        setTreatment(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold pl-8">{name}</h3>
                    <form className="card-body" onSubmit={handleBooking}>
                        <div className="form-control">
                            <input type="text" name="date" value={format(selectedDate, 'PP')} className="input input-bordered" disabled />
                        </div>
                        <select name="slot" className="select select-bordered">
                            {
                                slots.map((slot, i) => <option 
                                key={i} 
                                value={slot}
                                > {slot} </option>)
                            }
                        </select>

                        <div className="form-control">
                            <input type="text" name="name" placeholder="Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="tel" name="phone" placeholder="Phone Number" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <input type="email" name="email" value={user.email} className="input input-bordered" disabled />
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Submit" className="btn btn-accent text-white"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
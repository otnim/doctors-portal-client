import React from 'react';
import doctor from '../../../../assets/images/doctor.png';
import ButtonPrimary from '../../../../components/buttonPrimary/ButtonPrimary';

const MakeAppointment = () => {
    return (
        <div className="hero mb-6 bg-appointmentBackground mt-[150px]">
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <div className='lg:w-1/2 md:mt-[-120px] md:mb-[-16px]'>
                    <img src={doctor} className="rounded-lg hidden md:block"  alt='' />
                </div>
                <div className='lg:w-1/2 lg:pr-[100px]'>
                    <h3 className='text-2xl text-secondary'> Appointment </h3>
                    <h1 className="text-3xl font-bold text-white">Make an Appointment Today</h1>
                    <p className="py-6 text-white"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <ButtonPrimary> Appointment </ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;
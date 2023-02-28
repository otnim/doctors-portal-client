import React from 'react';
import Banner from '../banner/Banner';
import InfoCards from '../infoCards/InfoCards';
import ServiceCards from '../service/ServiceCards';
import MakeAppointment from './makeAppointment/MakeAppointment';
import ServiceSample from './serviceSample/ServiceSample';
import Testimonial from './testimonial/Testimonial';

const home = () => {
    return (
        <div className='px-5 bg-cover bg-center'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServiceCards></ServiceCards>
            <ServiceSample></ServiceSample>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default home;
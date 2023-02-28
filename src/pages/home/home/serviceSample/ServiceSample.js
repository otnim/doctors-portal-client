import React from 'react';
import Treatment from '../../../../assets/images/treatment.png';
import ButtonPrimary from '../../../../components/buttonPrimary/ButtonPrimary';

const ServiceSample = () => {
    return (
        <div className="hero mb-6">
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <div className='lg:w-1/2 lg:pl-[150px] lg:pr-[80px]'>
                    <img src={Treatment} className="rounded-lg shadow-2xl " alt='' />
                </div>
                <div className='lg:w-1/2 lg:pr-[160px]'>
                    <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <ButtonPrimary> Get Started </ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default ServiceSample;
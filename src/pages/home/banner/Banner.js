import React from 'react';
import ImageChair from '../../../assets/images/chair.png';
import ButtonPrimary from '../../../components/buttonPrimary/ButtonPrimary';

const Banner = () => {
    return (
        <div className="hero bg-homeBackground mb-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={ImageChair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <ButtonPrimary> Get Started </ButtonPrimary>
                </div>
            </div>
        </div>
        
        
    );
};

export default Banner;
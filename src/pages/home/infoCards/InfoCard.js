import React from 'react';

const InfoCard = ({card}) => {
    const {title, description, icon, bgColor} = card;
    
    return (
        <div className={`card-body lg:card-side items-center shadow-xl ${bgColor} rounded-lg`}>
            <figure>
                <img src={icon} alt="" />
            </figure>
            <div className='text-white'>
                <h3 className='text-2xl'> {title} </h3>
                <p> {description} </p>
            </div>
        </div>
    );
};

export default InfoCard;
import React from 'react';

const ServiceCard = ({card}) => {
    const {title, description, icon} = card;
    return (
        <div className={`card-body flex-col rounded-lg items-center text-center shadow-xl`}>
            <figure>
                <img src={icon} alt="" />
            </figure>
            <div className=''>
                <h3 className='text-2xl'> {title} </h3>
                <p> {description} </p>
            </div>
        </div>
    );
};

export default ServiceCard;
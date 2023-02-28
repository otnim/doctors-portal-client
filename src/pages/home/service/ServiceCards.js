import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png';
import Cavity from '../../../assets/images/cavity.png';
import Whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const ServiceCards = () => {
    const cardData = [
        {
            id: 1,
            title: "Fluoride Treatment",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem",
            icon: Fluoride,
        },
        {
            id: 2,
            title: "Cavity Filling",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem",
            icon: Cavity,
        },
        {
            id: 3,
            title: "Teeth Whitening",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem",
            icon: Whitening,
        },

    ]
    return (
        <div className='mt-20'>
            <h3 className='text-primary text-center font-bold'> OUR SERVICES </h3>
            <h2 className='text-2xl text-center'> Services We Provide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-10">
            {
                cardData.map(card => {
                    return <ServiceCard key={card.id} card={card}></ServiceCard>
                })
            }
        </div>
        </div>
    );
};

export default ServiceCards;
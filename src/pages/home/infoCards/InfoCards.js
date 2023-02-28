import React from 'react';
import Clock from '../../../assets/icons/clock.svg';
import Marker from '../../../assets/icons/marker.svg';
import Phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            title: "Opening Hours",
            description: "Open at 9:00 AM to 5:00 PM everyday",
            icon: Clock,
            bgColor: "bg-primary"
        },
        {
            id: 2,
            title: "Visit our location",
            description: "Banani, Dhaka",
            icon: Marker,
            bgColor: "bg-accent"
        },
        {
            id: 3,
            title: "Contact us",
            description: "+880 17 453 345 90",
            icon: Phone,
            bgColor: "bg-primary"
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                cardData.map(card => {
                    return <InfoCard key={card.id} card={card}></InfoCard>
                })
            }
        </div>
    );
};

export default InfoCards;
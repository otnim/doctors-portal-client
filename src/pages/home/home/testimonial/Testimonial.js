import React from 'react';
import quote from '../../../../assets/icons/quote.svg';
import PatientReview from './PatientReview';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';

const Testimonial = () => {
    const reviewData = [
        {
            id: 1,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: people1,
            name: "Harry Khan",
            homeTown: "California",
        },
        {
            id: 2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: people2,
            name: "Jessie Roy",
            homeTown: "Badda",
        },
        {
            id: 3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: people3,
            name: "Pollobi Ara",
            homeTown: "India",
        }
    ]

    return (
        <div>
            <div className='flex justify-between'>
                <div className=' lg:mt-12'>
                    <h3 className='text-primary text-xl font-bold'> Testimonial </h3>
                    <h1 className='text-3xl md:text-4xl'> What Our Patient Says </h1>
                </div>
                <figure className=''>
                    <img src={quote} alt="" className='w-24 lg:w-48' />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviewData.map(review => {
                        return <PatientReview key={review.id} review={review}></PatientReview>
                    })
                }
            </div>
        </div>
    );
};

export default Testimonial;
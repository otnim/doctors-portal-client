import React from 'react';

const PatientReview = ({ review }) => {
    const { name, homeTown, description, image } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p> {description} </p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-20 mr-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='text-2xl'> {name} </h3>
                        <p> {homeTown} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientReview;
import React from 'react';

const PopularInstructor = ({ item }) => {
    const { img, name, class_name } = item;
    return (
        <div className="card w-96 h-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-72" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {name}</h2>
                <p>Subject: {class_name}</p>
            </div>
        </div>
    );
};

export default PopularInstructor;
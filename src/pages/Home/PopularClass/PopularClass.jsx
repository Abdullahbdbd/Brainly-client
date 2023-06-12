import React from 'react';

const PopularClass = ({ item }) => {
    const { img, name, teacher, seat, price } = item;
    return (
        <div className="card w-96 h-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-72" />
            </figure>
            <div className="card-body font-semibold">
                <h2 className="card-title">Name: {name}</h2>
                <p>Teacher: {teacher}</p>
                <p>Seat: {seat}</p>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default PopularClass;
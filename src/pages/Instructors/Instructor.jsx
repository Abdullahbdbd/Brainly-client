import React from 'react';

const Instructor = ({ item }) => {
    const { img, name, class_name, email, totalClass } = item;
    return (
        <div className="card w-96  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl h-72" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Name: {name}</h2>
            <p>Subject: {class_name}</p>
            <p>Email: {email}</p>
            <p>Total Class: {totalClass}</p>
            <button className="btn btn-active btn-neutral  btn-sm">See Classes</button>
        </div>
    </div>
    );
};

export default Instructor;
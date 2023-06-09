import React from 'react';

const Class = ({ item }) => {
    const { img, teacher, name, seat, price } = item;

    const handleSelectClass = item => {
          console.log(item)
          
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='h-full' src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Class Name: {name}</h2>
                <h2 className="card-title">Teacher Name: {teacher}</h2>
                <h2 className="card-title">Available seats: {seat}</h2>
                <h2 className="card-title">Price: ${price}</h2>

                <div className="card-actions justify-end mt-5">
                    <button onClick={() => handleSelectClass(item)} className="btn btn-active btn-neutral btn-sm">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Class;
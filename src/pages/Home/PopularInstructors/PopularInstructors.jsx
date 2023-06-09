import React, { useEffect, useState } from 'react';
import PopularInstructor from './PopularInstructor';
import useData from '../../../hooks/useData';

const PopularInstructors = () => {
    const [teachers]=useData();
    const teacher = teachers.filter(item => item.category === 'Teacher');
    const popularTeacher = teacher.slice(0, 6);

    return (
        <div>
            <div className='grid grid-cols-3 gap-8 mt-10'>
                {
                    popularTeacher.map(item => (
                        <PopularInstructor
                            key={item._id}
                            item={item}
                        ></PopularInstructor>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularInstructors;

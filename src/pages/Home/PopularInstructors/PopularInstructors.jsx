import React, { useEffect, useState } from 'react';
import PopularInstructor from './PopularInstructor';

const PopularInstructors = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const teacherData = data.filter(item => item.category === 'Teacher');
                const slicedTeachers = teacherData.slice(0, 6);
                setTeachers(slicedTeachers);
            });
    }, []);

    return (
        <div>
            <div className='grid grid-cols-3 gap-8 mt-10'>
                {
                    teachers.map(item => (
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

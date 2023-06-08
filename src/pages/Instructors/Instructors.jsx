import React, { useEffect, useState } from 'react';
import Instructor from './Instructor';

const Instructors = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const teacherData = data.filter(item => item.category === 'Teacher');
                setTeachers(teacherData);
            });
    }, []);
    return (
        <div>
            <div className='grid grid-cols-3 gap-8 mt-10'>
                {
                    teachers.map(item => (
                        <Instructor
                            key={item._id}
                            item={item}
                        ></Instructor>
                    ))
                }
            </div>
        </div>
    );
};

export default Instructors;
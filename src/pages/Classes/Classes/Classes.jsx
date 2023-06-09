import React from 'react';
import useData from '../../../hooks/useData';
import Class from '../Class/Class';

const Classes = () => {
    const [teachers]=useData();
    const teacherData = teachers.filter(item => item.category === 'Class');

    return (
        <div>
           <div className='grid grid-cols-2 gap-8 mt-10'>
                {
                    teacherData.map(item => (
                        <Class
                            key={item._id}
                            item={item}
                        ></Class>
                    ))
                }
            </div>
        </div>
    );
};

export default Classes;
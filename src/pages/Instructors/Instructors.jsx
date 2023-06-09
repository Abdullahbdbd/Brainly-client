
import Instructor from './Instructor';
import useData from '../../hooks/useData';

const Instructors = () => {
    const [teachers]=useData();
    const teacherData = teachers.filter(item => item.category === 'Teacher');
    
    return (
        <div>
            <div className='grid grid-cols-3 gap-8 mt-10'>
                {
                    teacherData.map(item => (
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
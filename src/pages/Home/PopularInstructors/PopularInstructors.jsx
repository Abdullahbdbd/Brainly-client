
import PopularInstructor from './PopularInstructor';
import useData from '../../../hooks/useData';

const PopularInstructors = () => {
    const [teachers]=useData();
    const teacher = teachers.filter(item => item.category === 'Teacher');
    const popularTeacher = teacher.slice(0, 6);

    return (
        <div className=' mt-40'>

            <div className='text-center'>
                  <h1 className='text-4xl font-semibold'>POPULAR INSTRUCTORS </h1>
                  <p className='mt-5'>ipsum dolor sit, amet consectetur adipisicing elit. Praesentium maxime similique modi? <br /> Doloremque, adipisci ratione nulla mollitia sed qui perferendis, </p>
            </div>

            <div className='ml-10 grid lg:grid-cols-3 gap-8 mt-10'>
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

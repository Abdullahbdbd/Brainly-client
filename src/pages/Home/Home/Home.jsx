import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Guideline from '../Guideline/Guideline';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularInstructors></PopularInstructors>
            <Guideline></Guideline>
        </div>
    );
};

export default Home;
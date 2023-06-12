import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Guideline from '../Guideline/Guideline';
import PopularClasses from '../PopularClass/PopularClasses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Guideline></Guideline>
        </div>
    );
};

export default Home;
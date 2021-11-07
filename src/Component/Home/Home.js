import React from 'react';
import Banner from '../Header/Banner/Banner';
import Others from '../Others/Others';
import OurGuide from '../OurGuide/OurGuide';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Others></Others>
            <OurGuide></OurGuide>
            
        </div>
    );
};

export default Home;
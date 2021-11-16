import React from 'react';
import About from '../About/About';
import HappyClient from '../HappyClient/HappyClient';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main>
            <Header/>
            <About/>
            <Services/>
            <HappyClient/>
            <Pricing/>
            {/* // <OurValue/>
            // <Pricing/>
            // <Reviews/>
            // <Contact/>
            // <Footer/>
            // <ScrollTop/>  */} 
        </main>
    );
};

export default Home;
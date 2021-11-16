import React from 'react';
import About from '../About/About';
import HappyClient from '../HappyClient/HappyClient';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main>
            <Header/>
            <About/>
            <Services/>
            <HappyClient/>
            <Pricing/>
            <Reviews/>
            {/* // <Reviews/>
            // <Contact/>
            // <Footer/>
            // <ScrollTop/>  */} 
        </main>
    );
};

export default Home;
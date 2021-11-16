import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
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
            <Contact/>
            <Footer/>
            {/* <ScrollTop/>   */}
        </main>
    );
};

export default Home;
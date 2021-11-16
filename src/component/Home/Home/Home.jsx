import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main>
            <Header/>
            <About/>
            <Services/>
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
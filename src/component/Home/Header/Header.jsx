import React from 'react';
import NavBar from '../../Shared/Navbar/Navbar';
import './Header.css'
import Hero from '../Hero/Hero';

const Header = () => {
    return (
        <section className="header">
            <NavBar/>
            <Hero/>
        </section>
    );
};

export default Header;
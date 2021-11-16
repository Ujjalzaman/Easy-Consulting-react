import React from 'react';
import banner from '../../../image/hero-img.png'
import NavBar from '../../Shared/NavBar/NavBar';
// import './Header.css'
// import Fade from 'react-reveal/Fade';

const Header = () => {
    return (
        <section className="header">
            {/* <NavBar/> */}
            <div className="row w-100">
                <div className="row col-md-11 mx-auto ">
                    <div className="col-md-7 titleArea">
                        {/* <Fade duration={2000} left> */}
                            <p className="miniTitle">WE CREATE IDEAS</p>
                            <h1 className="headerTitle">HOW WE CAN HELP YOUR <span className="headerHighlight">BUSINESS</span></h1>
                            <p className="headerContent">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            <a href="#services"><button className="branBtn">Get Started</button></a>
                        {/* </Fade> */}
                    </div>
                    {/* <Fade duration={2000} right> */}
                        <div className="col-md-5 img">
                            <img src={`${banner}`} alt="" className="img-fluid"/>
                        </div>
                    {/* </Fade> */}
                </div>
            </div>
        </section>
    );
};

export default Header;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
import Fade from 'react-reveal/Fade';
import './Service.css';
import { UserContext } from '../../../App';

const Service = ({service}) => {
    const { admin, setSelectedService } = useContext(UserContext)
    const {name, price, description, img} = service;
    
    return (
        <div className="col-md-6 col-lg-4 service">
            <Fade bottom duration={2700} distance='70px'>
                <div className="service-card">
                    <div className="text-center">
                        <img src={`${img}`} alt="" className="serviceImg"/>
                    </div>
                    <h4 className="serviceName">{name}</h4>
                    <p className="serviceDes">{description}</p>
                    <div className="bookingBox">
                        <p className="servicePrice">${price}</p>
                        <Link className="serviceLink" to={admin ? '/dashboard/orderList' : '/dashboard/book'}>
                            <button className="bookingBtn" 
                            onClick={() => setSelectedService(service)}
                            >Book Now</button>
                        </Link>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Service;
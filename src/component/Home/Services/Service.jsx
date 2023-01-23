import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
import Fade from 'react-reveal/Fade';
import './Service.css';
import { useAppContext } from '../../../context';

const Service = ({service}) => {
    const { state:{ admin}, dispatch } = useAppContext()
    const {name, price, description, img} = service;

    const handleSelectedService = (service) => {
        dispatch({type: 'SELECTED_SERVICE', payload: service})
    }    
    
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
                            onClick={handleSelectedService}
                            >Book Now</button>
                        </Link>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Service;
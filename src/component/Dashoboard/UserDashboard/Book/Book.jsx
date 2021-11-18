import React, { useContext, useEffect, useState } from 'react';
import {UserContext} from '../../../../App'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { Form, Col, Row, Toast } from 'react-bootstrap';
import './Book.css'
import axios from 'axios';
import ifoIcon from '../../../../Assets/info.svg';
import Checkout from './Checkout';

const Book = () => {
    const { selectedService , setSelectedService } = useContext(UserContext)
    const [services, setServices] = useState([]);
    const [show, setShow] = useState(true);

    useEffect(() => {
        axios.get(`https://immense-river-40491.herokuapp.com/services`)
        .then(res => {
            setServices(res.data)
            if(!selectedService.name){
                setSelectedService(res.data[0])
            }
        })
    }, [selectedService.name, setSelectedService])

    const handleSelection = e => {
        const getService = services.find(({name}) => e.target.value === name)
        setSelectedService(getService)
    }

    const stripePromise = loadStripe('pk_test_51Ii2KaCKKXM4eFaOJWCOr8pS4GVkoCerGCRHefo7hDpLYMcjpGqPNpoeydvFApWXDSSMnfXNzdtwRcF1o8XmTk3H00xDH8wKZc');
    setTimeout(() => {
        setShow(false);
    }, 7000)

    return (
        <div className="bookForm">
            <Toast show={show} onClose={() => setShow(!show)} className="bookToast">
                <Toast.Header>
                    <img src={`${ifoIcon}`} className="rounded mr-2 toastIcon" alt=""/>
                    <strong className="mr-auto">Info</strong>
                    <small> 02 seconds ago</small>
                </Toast.Header>
                <Toast.Body>4242 4242 4242 4242 you can use this card number for testing </Toast.Body>
            </Toast>
            <Row>
                <Col md={6} xs={12} className="my-3">
                    <Form.Label style={{ fontWeight: "bold" }}>Service</Form.Label>
                    <select class="form-select" onChange={handleSelection}>
                        {selectedService.name && 
                             <option className="activeService" value={selectedService.name}>{selectedService.name}</option> 
                         } 
                        { 
                         services?.map(({id, name}) => <option key={id} value={name}>{name}</option>) 
                        }
                    </select>
                </Col>
                <Col md={6} xs={12} className="my-3">
                        <Form.Label style={{ fontWeight: "bold" }}>Price</Form.Label>
                        <div className="priceInput">
                         {selectedService.price}
                            </div>
                </Col>
            </Row>

            <Elements stripe={stripePromise}>
                <Checkout/>
            </Elements>
        </div>
    );
};

export default Book;
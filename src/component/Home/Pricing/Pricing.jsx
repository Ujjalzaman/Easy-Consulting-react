import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import React from 'react';
import PricingCard from './PricingCard';
import './Pricing.css';
import { PricingData } from '../../PricingData';
import sPic1 from '../../../Assets/s1.png';
import sPic2 from '../../../Assets/s2.png';
import sPic3 from '../../../Assets/s3.png';
import sPic4 from '../../../Assets/s4.png';
import sPic5 from '../../../Assets/s5.png';
import sPic6 from '../../../Assets/s6.png';
import Spinner from '../../Shared/Spinner/Spinner';
const Pricing = () => {
    return (
        <section className="pricing">
            <h4 className="miniTitle text-center">Pricing</h4>
            <div className="text-center">
                <h2 className="sectionTitle">CHOOSE PLAN</h2>
            </div>
            <Container>
                <Tab.Container defaultActiveKey="1"> 
                    <Row>
                        <Col md={10} className="mx-auto">
                            <Nav className="pricingNav">
                                <Nav.Item className="priceLink1">
                                    <Nav.Link eventKey="1">
                                        <img src={`${sPic1}`} alt="" />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="priceLink2">
                                    <Nav.Link eventKey="2">
                                        <img src={`${sPic2}`} alt="" />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="priceLink3">
                                    <Nav.Link eventKey="3">
                                        <img src={`${sPic3}`} alt="" />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="priceLink4">
                                    <Nav.Link eventKey="4">
                                        <img src={`${sPic4}`} alt="" />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="priceLink5">
                                    <Nav.Link eventKey="5">
                                        <img src={`${sPic5}`} alt="" />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="priceLink6">
                                    <Nav.Link eventKey="6">
                                        <img src={`${sPic6}`} alt="" />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                       </Col>
                        <Tab.Content>
                        {
                            PricingData.length === 0 ?
                            <div className="spinner text-center mt-3"><Spinner/></div>:
                            PricingData.map((data, index) => <PricingCard id={index} data={data} key={index}/>)
                        }
                        </Tab.Content>
                    </Row>
                </Tab.Container>
            </Container>
        </section>
    );
};

export default Pricing;
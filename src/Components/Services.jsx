import React from 'react';
import { Container, Row, Col } from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faSms } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

AOS.init();

const Services = () => {
    return (
        <div>
            <section className="mt-3 features-section" id="features">
                <Container>
                    <Row>
                        <Col className="md-12 text-center">
                            <div className="section-title">
                                <h1 className="display-4">Our <span>Services</span></h1>
                                <h2 className="subtitle"> Lorem ipsum dolor sit amet</h2>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col className="col-sm-12 col-md-4" data-aos="flip-up" data-aos-offset="200" data-aos-delay="400" data-aos-duration="1000">
                            <div className="features-item">
                                <div className="icon"><FontAwesomeIcon icon={faCalendar} className="mt-1 fa-2x" aria-hidden="true"></FontAwesomeIcon></div>
                                <h3>Event Marketing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </Col>

                        <Col className="col-sm-12 col-md-4" data-aos="flip-up" data-aos-offset="200" data-aos-delay="400" data-aos-duration="1000">
                            <div className="features-item features-item2">
                                <div className="icon"><FontAwesomeIcon icon={faPhone} className="mt-1 fa-2x" aria-hidden="true"></FontAwesomeIcon></div>
                                <h3>Phone Verification Service</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </Col>

                        <Col className="col-sm-12 col-md-4" data-aos="flip-up" data-aos-offset="200" data-aos-delay="400" data-aos-duration="1000">
                            <div className="features-item features-item2">
                                <div className="icon"><FontAwesomeIcon icon={faListAlt} className="mt-1 fa-2x" aria-hidden="true"></FontAwesomeIcon></div>
                                <h3>Online Directory Advertising</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </Col>

                        <Col className="col-sm-12 col-md-4" data-aos="flip-down" data-aos-offset="200" data-aos-delay="400" data-aos-duration="1000">
                            <div className="features-item features-item2">
                                <div className="icon"><FontAwesomeIcon icon={faGlobe} className="mt-1 fa-2x" aria-hidden="true"></FontAwesomeIcon></div>
                                <h3>Geo Specific Target Marketing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </Col>

                        <Col className="col-sm-12 col-md-4" data-aos="flip-down" data-aos-offset="200" data-aos-delay="400" data-aos-duration="1000">
                            <div className="features-item">
                                <div className="icon"><FontAwesomeIcon icon={faSms} className="mt-1 fa-2x" aria-hidden="true"></FontAwesomeIcon></div>
                                <h3>Text Marketing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </Col>

                        <Col className="col-sm-12 col-md-4" data-aos="flip-down" data-aos-offset="200" data-aos-delay="400" data-aos-duration="1000">
                            <div className="features-item">
                                <div className="icon"><FontAwesomeIcon icon={faEnvelope} className="mt-1 fa-2x" aria-hidden="true"></FontAwesomeIcon></div>
                                <h3>E-mail Markiting</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Services

import React from 'react';
import {Container, Row, Col} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const About = () => {
    return (
        <div>
            <section className="mb-3 mt-5" id="aboutServ">
                <Container>
                    <Row>
                        <Col className="sm-12 text-center">
                            <div id="flag" data-aos="slide-up" data-aos-offset="200" data-aos-delay="400" data-aos-duration="1000"></div>
                            <div className="carText2Div text-center mt-3">
                                <div>
                                    <h1 className="display-4 about" data-aos="fade-right" data-aos-offset="200" data-aos-delay="400" data-aos-duration="1000">About Us</h1>
                                </div>
                                <p className="lead carText2" data-aos="fade-right" data-aos-offset="200" data-aos-delay="400" data-aos-duration="1000">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quaerat omnis laboriosam placeat, sunt reiciendis! Recusandae quis nihil odit nisi quo atque dignissimos laboriosam. Repudiandae id voluptatem odio maiores ex, optio quae delectus quis ducimus provident obcaecati distinctio ipsam ad praesentium nisi necessitatibus iure, libero vel perferendis error nemo earum!
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default About;
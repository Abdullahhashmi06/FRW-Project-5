import React from 'react';
import {Container, Row, Col} from "reactstrap";
import Hero from "../Images/email-campaign-animate.svg";

const IntroSect = () => {
    return (
        <section id="introSect">
        <Container>
            <Row>
                <Col className="col-sm-12 col-md-6 introDiv mt-5">
                    <div>
                        <h1 className="mainHeading">The Top Notch Marketing And Sales Leads For Over 25 Years</h1>
                    </div>
                    <div className="mt-5">
                        <h4 className="deliverText1">
                            O Marketing is dedicated to delivering results.
                            <a href="refresh" id="clickForm">Click here</a> to request a personalized marketing quote / demo or 
                            call 123-456-789 to speak to a live representative now.
                        </h4>
                    </div>
                </Col>
                <Col className="col-sm-12 col-md-6  mt-5">
            
                    <img src={Hero} alt="SVG" />
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default IntroSect;

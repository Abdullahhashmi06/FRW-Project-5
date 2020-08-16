import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons';
import face from "../Images/facebook.png";
import twit from "../Images/twit.png";
import insta from "../Images/insta.png";
import { Container, Row, Col } from 'reactstrap';

const MyFooter = () => {
    return (
        <>
            <div>
                <footer id="footer">
                    <Container>
                        <Row className="text-center">
                            <Col className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5 text-center">
                                <div>
                                    <h1 className="display-4 text-white">O Marketing <FontAwesomeIcon icon={faCog} size="lg"></FontAwesomeIcon></h1>
                                </div>
                                <ul className="list-unstyled list-inline social text-center" data-aos="fade-right" data-aos-offset="200" data-aos-delay="400" data-aos-duration="1000">
                                    <li className="list-inline-item text-white"><img src={face} width="20" alt="facebook" /></li>
                                    <li className="list-inline-item text-white"><img src={twit} width="20" alt="facebook" /></li>
                                    <li className="list-inline-item text-white"><img src={insta} width="30" alt="facebook" /></li>
                                </ul>
                                <div className="text-white">
                                    <p className='lead'>This Web Page is made by a thirteen year old, Abdullah Hashmi. I have used bootstrap, react, etc. It is the fifth assignment of Bootcamp 2020 and in this I also added illustrations, on scroll animations, etc.</p>
                                    <hr />
                                    <p className="lead">© All right Reserved.Abdullah Hashmi</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </>
    )
}

export default MyFooter;

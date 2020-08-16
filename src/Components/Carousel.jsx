import React, { useState } from 'react';
import Hero2 from '../Images/business-plan-animate.svg';
import { Container, Row, Col } from 'reactstrap';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';



const items = [
    {
        altText: 'Slide 1',
        heading: 'Using our expertise to provide our customers.',
        contents: ['Exclusive Leads.Targeted Lists and Data',
                  'Mail, E-mail, and Text Marketing Systems',
                  'A solid Web Presence',
                  'More Prospects and More Sales']
    },
    {
        altText: 'Slide 2',
        heading: '2nd Heading',
        contents: ['Exclusive Leads.Targeted Lists and Data',
                  'Mail, E-mail, and Text Marketing Systems',
                  'A solid Web Presence',
                  'More Prospects and More Sales']        
    },
    {
        altText: 'Slide 3',
        heading: '3rd Heading',
        contents: ['Exclusive Leads.Targeted Lists and Data',
                  'Mail, E-mail, and Text Marketing Systems',
                  'A solid Web Presence',
                  'More Prospects and More Sales']      
    }
];


const TextCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item, idx) => {
        return (
            <CarouselItem key={idx}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <div>
                    <h1 className="carHead">{item.heading}</h1>
                </div>
                <div className="carTextDiv mt-3 ol2">
                    <ol>
                        {item.contents.map((content,index) => {
                            return (
                                <li className="lead" key={index}>{content}</li>
                            )
                        })}
                    </ol>
                </div>
                {/* <CarouselCaption captionText={item.altText} captionHeader={item.altText} className="text-white" /> */}
            </CarouselItem>
        );
    });

    return (
        <Container>
            <Row>
                <Col className="col-sm-12 col-md-6">
                    <div className="heroLeft"></div>
                    <img src={Hero2} alt="hero-2" />
                </Col>

                <Col className="col-sm-12 col-md-6 mt-5 carousleDiv">
                    <Carousel
                        data-interval="100"
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
                        {slides}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}
export default TextCarousel;

import './WhatWeOffer.css'
import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

function WhatWeOffer() {
    return (
        <Container>
        <Row>
            <Col style={{paddingTop: '150px'}} xs={12} md={6} className='d-block justify-content-center align-items-center'>
                <h1 className='d-flex justify-content-center mb-5'>What we offer</h1>
                <div>
                    <p>We can match students with their best opportunities abroad, connect them to top-ranked universities, and give them access to an interactive digital community (or social network). Access our vast database of international courses and universities. We provide detailed information and recommendations to help you find the perfect program that aligns with your academic and professional objectives.Benefit from our expert assistance with the entire application process. From preparing and refining your application documents to meeting deadlines and managing submission processes, we ensure a smooth and successful application experience. We offer guidance on visa applications, required documentation, and interview preparation to ensure you meet all necessary criteria.We provide information on scholarships, grants, and other funding opportunities to help make your study abroad experience more affordable.Our team offers tailored counseling to help you make informed decisions about your study abroad journey, including course selection, career advice, and long-term goals.</p>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <Carousel fade style={{marginTop:"170px"}} >
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMQzbEfgC5VI8rhk6VwmwJ8boTwdOMyHZnw&s" style={{ height: '400px', width: '600px', borderRadius: '15%' }} text="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="https://universitybureau.com/blogs/uploads/images/202209/image_750x_632aa7280e842.jpg" style={{ height: '400px', width: '600px', borderRadius: '15%' }}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.licdn.com/dms/image/D4D12AQGgrVT7J_QZgA/article-cover_image-shrink_720_1280/0/1697617253464?e=2147483647&v=beta&t=PG3D3vKZJuVZ2S6Ku10ZF6UoTxrB5MnJugW49N5Nzbw" style={{ height: '400px', width: '600px', borderRadius: '15%' }}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        </Container>
    )
}

export default WhatWeOffer

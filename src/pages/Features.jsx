import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import searchPrograms from'../assets/searchPrograms.png'
import applyPrograms from'../assets/applyPrograms.png'
import counselor from'../assets/counselor.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Features() {
    return (
        <Container className='mt-5'>
            <h1 className="text-center mb-4 text-black">Our Features</h1>
            <Row>
                <Col md={4} className="mb-4 p-3">
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src={searchPrograms} />
                    <Card.Body>
                  <Card.Title className='text-black fs-4'> Search Programs</Card.Title>
                     <Card.Text>
                          Search over 24,000 programs to find your ideal course in seconds
                    </Card.Text>
                  <Button variant="primary">Find  Programs <FontAwesomeIcon icon={faArrowRight} className='ms-2'></FontAwesomeIcon></Button>
                    </Card.Body>
                </Card>

                </Col>
                <Col md={4} className="mb-4 p-3">
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src={applyPrograms}/>
                    <Card.Body>
                  <Card.Title className='text-black fs-4'> Apply with us</Card.Title>
                     <Card.Text>
                     Our experts will help you create winning applications
                    </Card.Text>
                  <Button variant="primary">Apply Now <FontAwesomeIcon icon={faArrowRight} className='ms-2'></FontAwesomeIcon></Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} className="mb-4 p-3">
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src={counselor} />
                    <Card.Body>
                  <Card.Title className='text-black fs-4'> Career Guidance</Card.Title>
                     <Card.Text>
                     A dedicated expert will support you at every stage of Application
                    </Card.Text>
                  <Button variant="primary">Get guidance <FontAwesomeIcon icon={faArrowRight} className='ms-2'></FontAwesomeIcon></Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Features

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import { Col, Row } from 'react-bootstrap';
import AddPrograms from '../components/AddPrograms';

function Programs() {
  return (
    <>
      <Header />

      <div className='shadow px-4 py-4 rounded'>
        <div className='d-flex justify-content-between'>
          <h4 className='text-dark'> All Programs</h4>
          <AddPrograms />
        </div>

        <Row>


          <Col>
            <div className='d-flex mt-5 ms-5'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <div className='d-flex justify-content-between'>
                    <Card.Title>Geography(Hons)</Card.Title>
                    <Button variant="danger" ><FontAwesomeIcon icon={faHeart} /></Button>

                  </div>
                  <Card.Subtitle className="mb-2 text-muted">B.Sc</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Full-time</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">On Compus</Card.Subtitle>
                  <Card.Text>
                    Universirty of Worcester
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">England, United Kingdom</Card.Subtitle>

                  <Button className='mt-4' variant="primary">Apply Now</Button>

                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div className='d-flex mt-5 ms-5'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <div className='d-flex justify-content-between'>
                    <Card.Title>Geography(Hons)</Card.Title>
                    <Button variant="danger" ><FontAwesomeIcon icon={faHeart} /></Button>

                  </div>
                  <Card.Subtitle className="mb-2 text-muted">B.Sc</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Full-time</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">On Compus</Card.Subtitle>
                  <Card.Text>
                    Universirty of Worcester
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">England, United Kingdom</Card.Subtitle>

                  <Button className='mt-4' variant="primary">Apply Now</Button>

                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div className='d-flex mt-5 ms-5'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <div className='d-flex justify-content-between'>
                    <Card.Title>Geography(Hons)</Card.Title>
                    <Button variant="danger" ><FontAwesomeIcon icon={faHeart} /></Button>

                  </div>
                  <Card.Subtitle className="mb-2 text-muted">B.Sc</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Full-time</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">On Compus</Card.Subtitle>
                  <Card.Text>
                    Universirty of Worcester
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">England, United Kingdom</Card.Subtitle>

                  <Button className='mt-4' variant="primary">Apply Now</Button>

                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div className='d-flex mt-5 ms-5'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <div className='d-flex justify-content-between'>
                    <Card.Title>Geography(Hons)</Card.Title>
                    <Button variant="danger" ><FontAwesomeIcon icon={faHeart} /></Button>

                  </div>
                  <Card.Subtitle className="mb-2 text-muted">B.Sc</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Full-time</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">On Compus</Card.Subtitle>
                  <Card.Text>
                    Universirty of Worcester
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">England, United Kingdom</Card.Subtitle>

                  <Button className='mt-4' variant="primary">Apply Now</Button>

                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div className='d-flex mt-5 ms-5'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <div className='d-flex justify-content-between'>
                    <Card.Title>Geography(Hons)</Card.Title>
                    <Button variant="danger" ><FontAwesomeIcon icon={faHeart} /></Button>

                  </div>
                  <Card.Subtitle className="mb-2 text-muted">B.Sc</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Full-time</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">On Compus</Card.Subtitle>
                  <Card.Text>
                    Universirty of Worcester
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">England, United Kingdom</Card.Subtitle>

                  <Button className='mt-4' variant="primary">Apply Now</Button>

                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div className='d-flex mt-5 ms-5'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <div className='d-flex justify-content-between'>
                    <Card.Title>Geography(Hons)</Card.Title>
                    <Button variant="danger" ><FontAwesomeIcon icon={faHeart} /></Button>

                  </div>
                  <Card.Subtitle className="mb-2 text-muted">B.Sc</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Full-time</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">On Compus</Card.Subtitle>
                  <Card.Text>
                    Universirty of Worcester
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">England, United Kingdom</Card.Subtitle>

                  <Button className='mt-4' variant="primary">Apply Now</Button>

                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>

    </>
  )
}

export default Programs

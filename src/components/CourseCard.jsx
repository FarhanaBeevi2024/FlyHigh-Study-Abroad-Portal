import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function CourseCard() {
  return (
    <>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <div className='d-flex justify-content-between'>
        <Card.Title>Geography(Hons)</Card.Title>
        <Button variant="danger" ><FontAwesomeIcon icon={faHeart}/></Button>

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

    </>
  )
}

export default CourseCard

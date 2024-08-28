import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div
            className='container-fluid'
            style={{
                height: '100vh',
                backgroundImage: 'url("https://media.istockphoto.com/id/1685584885/photo/ideas-for-college-university-tuition-fees-for-education-investment-and-scholarship-planning.jpg?s=612x612&w=0&k=20&c=_G5f3edzu_hjnJ7Qed4s9D8EcNabdcEZLwZD0jGipjc=")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                paddingTop: '300px'
            }}
        >
            <Row className='d-flex justify-content-center align-items-center p-3 p-md-5'>
                <Col xs={12} md={12} className='ps-5'>

                    <h1 className='text-primary' style={{ fontSize: '70px' }}>Fly High Overseas</h1>
                    <p className='mt-4 text-secondary'>Embark on your international educational journey with ease and confidence. Our platform is <br/>designed to help you explore and connect with universities and programs around the world,  <br/>including top destinations like Europe, Canada, and the UK. Whether you’re interested in<br/> undergraduate or postgraduate studies, we provide a comprehensive range of tools to find the<br/> perfect program for you.</p>
                    <Link to={'/login'}><button className='btn btn-warning mt-4'>Get Started <FontAwesomeIcon icon={faArrowRight} className='ms-2' /> </button></Link>
                    {/* <Link to={'/dashboard'}><button className='btn btn-warning ms-5 mt-4'>Manage Project <FontAwesomeIcon icon={faArrowRight} className='ms-2'/> </button></Link>  */}

                </Col>
            </Row>
        </div>
    )
}

export default LandingPage

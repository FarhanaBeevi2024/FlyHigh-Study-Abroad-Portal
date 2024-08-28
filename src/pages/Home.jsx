
import React from 'react'
import { Link } from 'react-router-dom'
import MainCourse from '../components/MainCourse'
import Features from './Features'
import WhatWeOffer from './WhatWeOffer'
import LandingPage from './LandingPage'
import CourseCard from '../components/CourseCard'
import Header from '../components/Header'

function Home() {

  return (
    <>
         <Header/>

<LandingPage />
<Features/>
<WhatWeOffer/>
   
      <div className='container-fluid '>
        <h1 className='text-center' style={{marginTop:'150px'}}>Explore our Programs</h1>
        <div className='row '>

          <div className='col-md-12 p-4'>
            <MainCourse />
          </div>

          <div className='col-md-4 p-4'>
            <CourseCard />
          </div>


        </div>
        <Link to={'/programs'} className='text-center text-danger'> <h5>See more Programs</h5></Link>
      </div>
    </>
  )
}

export default Home


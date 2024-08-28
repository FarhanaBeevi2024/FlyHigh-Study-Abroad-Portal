import React from 'react'
import { Card } from "react-bootstrap";

function MainCourse() {
  return (
    <>

      <div className="row">
        <div className="col-md-1 me-md-5"></div>

        <div className="col-md-3 px-5 px-md-4">
          <Card style={{ width: "100%" }} className="p-3">
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/id/488157695/photo/studying-abroad-in-london.jpg?s=612x612&w=0&k=20&c=684Qwk7WFV6yU9LDAEUdWRwqyeixP32_GEQANza1ZnI="
              className="w-100"
              height={"300px"}
            />
            <Card.Body>
              <Card.Title>Bachelor's Programmes</Card.Title>
              <Card.Text>
              Choose from more than 100,000 Bachelor’s programmes at universities, colleges and schools worldwide.
              </Card.Text>
              <button className='btn btn-success w-100' type='button' >Search Bachelors</button>

            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-5 px-md-4">
          <Card style={{ width: "100%" }} className="p-3 ms-4">
            <Card.Img
              variant="top"
              src="https://www.avanse.com/blogs/images/next-top-27.jpg"
              className="w-100"
              height={"300px"}
            />
            <Card.Body>
              <Card.Title>Master's Programmes</Card.Title>
              <Card.Text>
              Find and compare more than 75,000 Master’s degrees from top universities worldwide.
              </Card.Text>
              <button className='btn btn-success w-100' type='button' >Search Masters</button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 px-5 px-md-4 ">
          <Card style={{ width: "100%" }} className="p-3">
            <Card.Img
              variant="top"
              src="https://media.licdn.com/dms/image/D5612AQE4enb_AQZE4w/article-cover_image-shrink_720_1280/0/1689243153515?e=2147483647&v=beta&t=JGAts9kh7ixAGjWNiqJv0pQXv24wxIPEd2ydA1IA3WI"
              className="w-100"
              height={"300px"}
            />
            <Card.Body>
              <Card.Title>PhD & Doctorate Studies</Card.Title>
              <Card.Text>
              PhD, professional doctorates and other Doctoral degrees at graduate schools, universities and research institutes.
              </Card.Text>
              <button className='btn btn-success w-100' type='button' >Search PhD</button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-1"></div>
      </div>
      
    </>
  )
}

export default MainCourse

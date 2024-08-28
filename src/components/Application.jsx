
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import stateOptions from "../services/states";

function Application() {
  return (
    <>

      <div className=" mt-5 mb-5 d-flex justify-content-center align-items-center">
        <div className="bg-light p-5 rounded">
          <h1 className="text-primary ms-5 mb-5">International Students Application Form</h1>

          <Form>
            <Row className="mb-5">
              <Form.Group as={Col} controlId="username">
                <Form.Label>Student's Name : </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Name"
                  
                />
              </Form.Group>

              <Form.Group as={Col} controlId="gender">
                <Form.Label>Gender : </Form.Label>

                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="male"
                      name="group1"
                      type={type}
                      id={`inline-${type}-male`}
                      value="male"
                  
                      
                    />
                    <Form.Check
                      inline
                      label="female"
                      name="group1"
                      type={type}
                      id={`inline-${type}-female`}
                      value="female"
                     
                      
                    />
                    <Form.Check
                      inline
                      label="other"
                      name="group1"
                      type={type}
                      id={`inline-${type}-other`}
                      value="other"
                    
                      
                    />
                  </div>
                ))}
              </Form.Group>


              <Form.Group as={Col} controlId="age">
                <Form.Label>Age :</Form.Label>
                <Form.Control
                  type="number"
                   placeholder="Enter your Age"
                 
                />
              </Form.Group>

             
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="bloodgrp">
                <Form.Label>Country of Birth: </Form.Label>
                <Form.Select
                  aria-label="Blood Group"
                
                  
                >
                  <option>Select...</option>
                
                  
                
          
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="date">
                <Form.Label>Date of Birth: </Form.Label>
                <DatePicker
                 
           
                  dateFormat="dd/MM/yyyy"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="unit">
                <Form.Label> Nationality :</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Nationality"
                  
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="state">
                <Form.Label>State :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  
                />
              </Form.Group>

              <Form.Group as={Col} controlId="district">
                <Form.Label>Country :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Country"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Permanent Address : </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Email : </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number : </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                
              />
            </Form.Group>

            <Form.Group as={Col} controlId="disability">
                <Form.Label>Do you suffer from any medical condition/disability that may affect your studies? : </Form.Label>

                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Yes"
                      name="group1"
                      type={type}
                      id={`inline-${type}-Yes`}
                      value="Yes"
                  
                      
                    />
                     <Form.Check
                      inline
                      label="No"
                      name="group1"
                      type={type}
                      id={`inline-${type}-No`}
                      value="No"
                  
                      
                    />
                  </div>
                ))}
              </Form.Group>

              <Form.Group as={Col} controlId="disability">
                <Form.Label>if yes, please specify from the following : </Form.Label>

                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Hearing"
                      name="group1"
                      type={type}
                      id={`inline-${type}-hearing`}
                      value="Hearing"
                  
                      
                    />
                     <Form.Check
                      inline
                      label="Learning"
                      name="group1"
                      type={type}
                      id={`inline-${type}-learning`}
                      value="Learning"
                  
                      
                    />

                      <Form.Check
                      inline
                      label="Visual"
                      name="group1"
                      type={type}
                      id={`inline-${type}-visual`}
                      value="Visual"
                  
                      
                    />

                      <Form.Check
                      inline
                      label="Mobility"
                      name="group1"
                      type={type}
                      id={`inline-${type}-mobility`}
                      value="Mobility"
                  
                      
                    />

                      <Form.Check
                      inline
                      label="Medical"
                      name="group1"
                      type={type}
                      id={`inline-${type}-medical`}
                      value="Medical"
                  
                      
                    />

                    <Form.Check
                      inline
                      label="Other"
                      name="group1"
                      type={type}
                      id={`inline-${type}-other`}
                      value="Other"
                  
                      
                    />

                  </div>
                ))}
              </Form.Group>






            <div className="d-flex justify-content-between">
              <Button
                className="ms-3 fs-5"
                variant="danger"
                type="submit"
               
              >
                Submit
              </Button>

              <Button
                className="ms-5 fs-5"
                variant="warning"
                
              >
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>

    </>
  )
}

export default Application

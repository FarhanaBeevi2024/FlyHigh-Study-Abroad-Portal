import { faFacebook, faLinkedin,faTwitter,faInstagram, faStackOverflow,} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className="container-fluid">
    <div className="row mt-5 p-3 bg-primary">
      <div className="col-md-4 p-4 ms-md-5">
        
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzNQWY3x3Tfj0vU6s_2ilkdr8mrcx4wCGCA&s" alt="" />
       
        {/* <h4 className="text-light"> <FontAwesomeIcon icon={faStackOverflow} className="me-2 fs-2" />Project Fair </h4>

        <p style={{ textAlign: "justify", color:'black' }} className="mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
           placeat numquam molestias minus eos error omnis nobis similique?
          Ratione similique quam enim deserunt placeat natus amet quidem quis
          asperiores odit. 
        </p> */}
      </div>
      <div className="col-md-2 p-4 ms-4 justify-content-center ">
        <div>
          <h4 className="text-light">Links</h4>
          
          <p className="mt-4" > <Link to={'/'} style={{color:'black'}}
          
            >Home</Link>
          </p>
          <p className="mt-4" > <Link to={'/programs'} style={{color:'black'}}
          
          >Programs</Link>
        </p>

        <p className="mt-4" > <Link to={'/dashboard'} style={{color:'black'}}
          
          >DashBoard</Link>
        </p>
        </div>
      </div>

      <div className="col-md-2 p-4">
        <h4 className="text-light">Reach Us</h4>
        <p className="mt-4" style={{color:'black'}}>Fly High Overseas Education</p>
        <p style={{color:'black'}}>Neeladri Nagar,Bangalore</p>
        <p style={{color:'black'}}>Karnataka -560100</p>
      </div>

      <div className="col-md-3 p-4">
        <h4 className="text-light">Follow Us</h4>
        <div className="d-flex mt-4">
          <input type="text" className="form-control "  style={{ backgroundColor: 'white' }} placeholder="Email id" />
          <button className="btn btn-warning ms-3">Subscribe</button>
        </div>
        <div className="d-flex mt-4 justify-content-between text-light">
          <FontAwesomeIcon icon={faInstagram} size="2xl" />
          <FontAwesomeIcon icon={faFacebook} size="2xl" />
          <FontAwesomeIcon icon={faTwitter} size="2xl" />
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
    </div>
  )
}

export default Footer;



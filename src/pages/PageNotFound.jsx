import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PageNotFound() {
  return (
    <div className="row w-100">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div
          style={{ height: "80vh", width: "100%" }}
          className=" mb-5 d-flex justify-content-center align-items-center flex-column"
        >
          <img src="https://cdn.dribbble.com/users/1022481/screenshots/3018253/404-snow.gif"
            alt="no image" width={'100%'}
          />
          
          <h1>Whoops..! that page is gone</h1>

<button className="btn btn-success mt-3"><FontAwesomeIcon icon={faArrowLeft} className="me-2"/>Back to Home</button>
        </div>
      </div>

      <div className="col-md-3"></div>
    </div>
  )
}

export default PageNotFound


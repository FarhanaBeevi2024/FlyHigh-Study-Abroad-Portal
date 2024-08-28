import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProgramApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addResponseContext } from '../context/DataShare';


function AddPrograms() {

  const [show, setShow] = useState(false);

  const[programDetails, setProgramDetails] = useState({
    degreeType :"", //eg:B.Sc/M.Sc/P.hD
    modeOfStudy :"", //eg: Full-time/ Part-time
    studyType:"", //eg: OnCampus/ Online
    tuitionFees :"", //eg: 4000Euro
    duration :"", //eg: 3years
    university :"", //universityOfWorcester
    location:"", //England,UnitedKingdom
    universityLogo :""
  })
  //console.log(programDetails);
  

  const[preview,setPreview]= useState("")
  const[key, setKey] = useState(0)
  const [token, setToken] = useState("")
  const{setAddResponse} = useContext(addResponseContext)

  const handleFile =(e)=>{
    // console.log(e.target.files[0]);
    setProgramtDetails({...programDetails,universityLogo:e.target.files[0]})
  }

  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true);
  handleClose1 ()
};
  const handleClose1 = () => {
   
    setProgramDetails({
      degreeType :"", 
      modeOfStudy :"",
      studyType:"",
      tuitionFees :"", 
      duration :"", 
      university :"", 
      location:"", 
      universityLogo :""
  })
  setPreview("")
  if(key==0){
    setKey(1)
  }
  else{
    setKey(0)
   }
  }

  useEffect(()=>{
    if(programDetails.universityLogo){
  //Method used to convert files into urls(url library) - createObjectURL
    // console.log(URL.createObjectURL(programtDetails.projImage));
      setPreview(URL.createObjectURL(programDetails.universityLogo));
    }
  },[programDetails.universityLogo])
  // console.log(preview);

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem("token"))
    }
   
  },[])
  console.log(token);

  const handleAdd = async (e)=>{
    e.preventDefault()

    const {degreeType, modeOfStudy,studyType,tuitionFees,duration,university, location, universityLogo} = programDetails
    if(!degreeType || !modeOfStudy || !studyType || !tuitionFees ||!duration ||!university ||!location ||!universityLogo){
      toast.info('Please fill the form completely')
  }
  else{
    //api

    //in order to send uploaded  content - use formData class
    const reqBody = new FormData()

    reqBody.append("degreeType", degreeType)
    reqBody.append("modeOfStudy", modeOfStudy)
    reqBody.append("studyType", studyType)
    reqBody.append("tuitionFees", tuitionFees)
    reqBody.append("duration", duration)
    reqBody.append("university",university)
    reqBody.append("location",location)
    reqBody.append("universityLogo",universityLogo)
  
    if(token){
      const reqHeader ={
        "Content-Type" : "multipart/form-data",
        "Authorization" : `Bearer ${token}`
       }
       const result= await addProgramApi(reqBody,reqHeader)
       console.log(result);
       if(result.status ==200)
       {
        toast.success('Project Uploaded Successfully')
        handleClose()
        setAddResponse(result.data)
       }
      }
      else{
        toast.info('Please Login')
      }
    }
   
  }


  return (
<>
    <div className='ms-auto'>
  <button className='btn btn-success' onClick={handleShow}>Add Programs</button>

  <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Add Program details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
            <label htmlFor="universityLogo">
              <input id="universityLogo" type='file' style={{display:'none'}}key={key} onChange={(e)=>handleFile(e)}/>

              {/* key - it have the function to potential onchange function */}

              <img src={preview? preview:"https://m.media-amazon.com/images/I/71sKzRQtXtL.png"} alt="no image" width={'50%'} />

            </label>

            <div className='mb-3'>
            <input type="text" placeholder='Degree Type' className='form-control' value={programDetails.degreeType} onChange ={(e)=>setProgramDetails({...programDetails,degreeType:e.target.value})}/>
            </div>
            <div className='mb-3'>
            <input type="text" placeholder='Mode of Study' className='form-control' value={programDetails.modeOfStudy} onChange ={(e)=>setProgramDetails({...programDetails,modeOfStudy:e.target.value})} />
            </div>
            <div className='mb-3'>
            <input type="text" placeholder='Study Type' className='form-control' value={programDetails.studyType} onChange ={(e)=>setProgramDetails({...programDetails,studyType:e.target.value})} />
            </div>


            </Col>
            
            <Col sm={12} md={6}>
          <form className='p-3'>

          
            <div className='mb-3'>
            <input type="text" placeholder='Tuition Fees' className='form-control' value={programDetails.tuitionFees} onChange ={(e)=>setProgramDetails({...programDetails,tuitionFees:e.target.value})} />
            </div>
            <div className='mb-3'>
            <input type="text" placeholder='Duration' className='form-control' value={programDetails.duration} onChange ={(e)=>setProgramDetails({...programDetails,duration:e.target.value})} />
            </div>
            <div className='mb-3'>
            <input type="text" placeholder='University' className='form-control' value={programDetails.university} onChange ={(e)=>setProgramDetails({...programDetails,university:e.target.value})} />
            </div>
            <div className='mb-3'>
            <input type="text" placeholder='Location' className='form-control' value={programDetails.location} onChange ={(e)=>setProgramDetails({...programDetails,location:e.target.value})} />
            </div>

            </form>

            </Col>
          </Row>
        </Modal.Body>
        {/* <ToastContainer theme="colored" position="top-center" autoClose={2000} /> */}

        <Modal.Footer>
          <Button variant="warning" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
      </div>
    </>
  )
}
export default AddPrograms


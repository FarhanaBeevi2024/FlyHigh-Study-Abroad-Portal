import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import Nav from 'react-bootstrap/Nav';


function Header() {
  const [user, setUser] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      setUser(JSON.parse(sessionStorage.getItem('existingUser')).username);
    }
    console.log()
  }, [])

  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('existingUser')
    setUser("");
  }

  return (
    <>
      <Navbar expand="lg" className="mb-5 bg-secondary w-100" style={{ height: '100px', top: '0px', position: 'sticky', zIndex: '1' }}>
        <Container>
          <Link to={'/'}>

            <Navbar.Brand className='text-black'>

              <img className="d-inline-block align-top" src={logo} style={{ height: '90px', width: "170px" }} alt="" />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls='basic- navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>

              <Nav.Link className='mt-2 fs-5 text-black' as={Link} to="/">Home</Nav.Link>
              <Nav.Link className='mt-2 fs-5 text-black' as={Link} to="/colleges">Features</Nav.Link>
              <Nav.Link className='mt-2 fs-5 text-black' as={Link} to="/About">About</Nav.Link>
              <Nav.Link className='mt-2 fs-5 text-black' as={Link} to="/About">Programs</Nav.Link>

              {!user &&
                <Nav.Link>
                  <Link to={'/register'}> <button className='btn btn-warning border rounded'> Sign Up </button> </Link>
                </Nav.Link>}


              {user ? <Nav.Link>
                <button className='btn btn-danger border rounded' onClick={handleLogout}> LogOut</button>
              </Nav.Link>
                :
                <Nav.Link>
                  <Link to={'/login'}> <button className='btn btn-success border rounded'> Login</button> </Link>
                </Nav.Link>}


            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  )
}

export default Header


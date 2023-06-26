import React from "react";
import { BrowserRouter, Routes, Route,  NavLink} from "react-router-dom";
import App from "./App";
import './App.css'
import teslaName from './accessories/teslaname.png'
import teslaLogo from './accessories/teslaLogo.png'
import { Navbar, Nav, Container} from 'react-bootstrap';
import About from './About'
import Shop from "./Shop";
import Contact from './Contact'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
      
      
      <Navbar bg="black" variant="dark" className="navbar-fixed">
        <div className="navbar-content">
          <Navbar.Brand as={NavLink} to="/" className="ps-3">
            <img src={teslaLogo} alt="Logo 1" style={{ width: '80px', height: '90px', paddingTop: '25px'}} />
          </Navbar.Brand>
          <div className="tesla-name">
            <img src={teslaName} alt="Logo 2" style={{ width: '100px', height: '100px', paddingTop: '5px' }} />
          </div>
          <Nav className="pe-4">
                <Nav.Link as={NavLink} to="/shop" className="active-link">
            Shop
          </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="active-link">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className="active-link">
            Contact
          </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
   
    <footer className="bg-black text-light p-2">
        <Container>
          <div className="text-center">
            &copy; {new Date().getFullYear()} Zdeslav Zaksek. All rights reserved.
          </div>
        </Container>
      </footer>
    </div>
     </BrowserRouter>
  );
};

export default RouteSwitch;
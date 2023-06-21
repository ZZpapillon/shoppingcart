import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import './App.css'
import teslaName from './accessories/teslaname.png'
import teslaLogo from './accessories/teslaLogo.png'
import { Navbar, Nav, Container} from 'react-bootstrap';

import Shop from "./Shop";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
      
      
      <Navbar bg="black" variant="dark" className="navbar-fixed">
        <div className="navbar-content">
          <Navbar.Brand href="/" className="ps-3">
            <img src={teslaLogo} alt="Logo 1" style={{ width: '80px', height: '90px', paddingTop: '25px'}} />
          </Navbar.Brand>
          <div className="tesla-name">
            <img src={teslaName} alt="Logo 2" style={{ width: '100px', height: '100px', paddingTop: '5px' }} />
          </div>
          <Nav className="pe-4">
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="#section2">About</Nav.Link>
            <Nav.Link href="#section3">Contact</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
       
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
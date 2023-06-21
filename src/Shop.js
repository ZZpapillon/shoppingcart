import React from 'react';

import { Button, Container, Col, Row} from 'react-bootstrap';
import Car1 from './accessories/car1.avif'
import { BiCart } from 'react-icons/bi';


function Shop() {
    const backgroundImageStyle = {
    backgroundImage: `url(${Car1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: 'calc(100vh - 100px)',
    
  };
 return (
  
     <div className="car1 text-center" style={backgroundImageStyle}>
     <Container >
        <Row className="justify-content-start">
          <Col sm={1} style={{marginTop : '-5vh'}}>
        <svg className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg" width="120" height="120"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="black" ></path></svg>

        </Col>
          <Col sm={10}>
           <div className='mt-5' style={{ color: 'black', fontSize: '4rem', fontWeight: '440'}}>
            Model 3
            </div>
            <p>Starting at $32,740</p>
            <p>After Federal Tax Credit</p>
          </Col>
          <Col className='mt-3 ps-5'sm={1}><BiCart size={58} /></Col>
        </Row>
      </Container>



     </div>
      
  );
}

export default Shop;
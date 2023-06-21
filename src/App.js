import React from 'react';

import { Container, Button,Row,Col } from 'react-bootstrap';
import videoSource from './accessories/videoplayback.mp4'

function App() {
 return (
  
     <div className="content-container mt-5">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={videoSource} type="video/mp4" />
        </video>
        </div>
        <Container fluid className="d-flex flex-column align-items-center">
          <Row className="justify-content-center mt-5">
            <Col xs={12} lg={12} className="text-center mt-1">
              <div className="experience-tesla-heading" style={{ color: 'white', fontSize: '6rem', fontWeight: 'normal'}}>
                Experience Tesla
              </div>
              <div className='ptext' style={{ color: 'white', fontSize: '1.5rem',fontWeight: 'lighter', marginTop: '0.2rem' }}>
                <p className="first-p" style={{ fontSize: '2.3rem' }}>Order today your dream car!</p>
                <p className='second-p'>Do it fast before it gets out of stock!</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col xs={12} lg="auto" className="text-center">
              <Button
                variant="outline-light btn-lg"
                href="/shop"
                className="px-4 py-3 fs-2 mt-4"
              >
                Go to Shop
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      
  );
}

export default App;



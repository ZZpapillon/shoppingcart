import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutVideo from './accessories/about.mp4';
import Fade from 'react-reveal/Fade';


function About() {
  return (
    <section className="about-section">
      <Container fluid>
        <Row>
          <Col md={6} className="about-content">
            <Fade left>
              <div className="about-content-wrapper">
                <h2>About Tesla</h2>
                <p>
                  Tesla is an American electric vehicle and clean energy company. It was founded in 2003 by a group of
                  engineers with a mission to accelerate the world's transition to sustainable energy.
                </p>
                <p>
                  Tesla's products include high-performance electric cars, autonomous driving technology, a supercharging network for fast recharging, energy storage solutions for homes and businesses, and solar energy solutions. The company is known for its innovative designs, cutting-edge technology, and commitment to sustainability.
                </p>
                <h3>Mission</h3>
                <p>
                  Tesla's mission is to create the most compelling car company of the 21st century by driving the world's transition to electric vehicles. The company aims to provide sustainable transportation options without compromising on performance, safety, or style.
                </p>
                <h3>Values</h3>
                <ul>
                  <li>Innovation: Tesla continuously pushes the boundaries of what's possible in the automotive and energy industries.</li>
                  <li>Sustainability: The company is dedicated to reducing carbon emissions and promoting sustainable energy solutions.</li>
                  <li>Quality: Tesla strives for excellence in design, engineering, and manufacturing.</li>
                  <li>Customer Focus: Tesla puts its customers at the center of everything it does, aiming to exceed their expectations.</li>
                  <li>Autonomy: Tesla is driving the development of autonomous driving technology to make transportation safer and more efficient.</li>
                </ul>
              </div>
            </Fade>
          </Col>
          <Col md={6} className="about-image">
            <Fade right>
              <video autoPlay muted loop style={{ maxWidth: '100%' }}>
                <source src={AboutVideo} type="video/mp4" />
              </video>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;



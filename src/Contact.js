import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import ContactVideo from './accessories/contact.mp4';
import Fade from 'react-reveal/Fade';

function Contact() {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your message sending logic here

    // Show the notification
    setShowNotification(true);

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <section className="contact-section">
      <Container fluid>
        <Row>
          <Col md={6} className="contact-image">
           
              <video autoPlay muted loop>
                <source src={ContactVideo} type="video/mp4" />
              </video>
            
          </Col>
          <Col md={6} className="contact-content">
            <Fade right>
              <div>
                <h2>Contact Us</h2>
                <p>
                  Feel free to reach out to us for any inquiries or feedback. We'd love to hear from you!
                </p>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                  </Form.Group>
                  <Button variant="primary" type="submit">Send Message</Button>
                </Form>
                {showNotification && (
                  <Alert variant="primary" className="mt-3 success-message">
                    Fake message was successfully sent!
                  </Alert>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;



"use client"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ContactSection() {
    return (
        <Container className='py-5 mb-5'>
            <Row className='justify-content-center'>
                <Col md={8}>
                    <div className="text-center mb-4">
                        <h6 className="text-info text-uppercase fw-bold">Get In Touch</h6>
                        <h2 className="display-6 fw-bold">Contact Me</h2>
                        <p className="text-muted">Apakah Anda memiliki ide proyek? Jangan ragu untuk menghubungi saya.</p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-4 shadow-lg">
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3 text-dark" controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Your Name" className="bg-light border-0 py-2" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3 text-dark" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" className="bg-light border-0 py-2" required />
                                    </Form.Group> 
                                </Col>
                            </Row>
   
                            <Form.Group className="mb-4 text-dark" controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Tell me about your project" className="bg-light border-0" required />
                            </Form.Group>
                            <Button variant="info" type="submit" size="lg" className="w-100 text-white fw-bold">
                                Send Message
                            </Button>
                        </Form> 
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactSection;
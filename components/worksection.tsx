'use client'
import { Button, Card, Container, Row, Col, Badge } from 'react-bootstrap';

function WorkSection() {
    return (
        <Container id="work" className="py-5">
            <Row className='mb-5 text-center'>
                <Col md={8} className="mx-auto">
                    <h6 className="text-info text-uppercase fw-bold letter-spacing-2">Portfolio</h6>
                    <h2 className="display-6 fw-bold text-dark">Recent Projects</h2>
                    <p className="text-muted">Berikut adalah beberapa proyek terbaik yang pernah saya kerjakan, mulai dari website e-commerce hingga aplikasi manajemen.</p>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm border-0 hover-lift">
                        <Card.Img variant="top" src="/images/1.png" style={{height: '200px', objectFit: 'cover'}} />
                        <Card.Body>
                            <div className="mb-2">
                                <Badge bg="dark" className="me-1">Gunung</Badge>
                                <Badge bg="info" className="me-1">Party</Badge>
                            </div>
                            <Card.Title className="fw-bold">Mendaki GUnung Bersama Teman</Card.Title>
                            <Card.Text className="text-muted small">
                                Ini merupakan foto setelah saya mendaki gunung bersama teman-teman.
                            </Card.Text>
                            <Button variant="outline-dark" size="sm" className="w-100 mt-2">View Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm border-0 hover-lift">
                        <Card.Img variant="top" src="/images/2.png" style={{height: '200px', objectFit: 'cover'}} />
                        <Card.Body>
                            <div className="mb-2">
                                <Badge bg="primary" className="me-1">Beli</Badge>
                                <Badge bg="warning" text="dark" className="me-1">Pancingan</Badge>
                            </div>
                            <Card.Title className="fw-bold">Membeli Pancingan</Card.Title>
                            <Card.Text className="text-muted small">
                                Ini merupakan foto saat saya membeli pancingan di toko alat pancing.
                            </Card.Text>
                            <Button variant="outline-dark" size="sm" className="w-100 mt-2">View Details</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm border-0 hover-lift">
                        <Card.Img variant="top" src="/images/3.png" style={{height: '200px', objectFit: 'cover'}} />
                        <Card.Body>
                            <div className="mb-2">
                                <Badge bg="danger" className="me-1">Mancing</Badge>
                                <Badge bg="success" className="me-1">Date</Badge>
                            </div>
                            <Card.Title className="fw-bold">Mancing</Card.Title>
                            <Card.Text className="text-muted small">
                                foto ini diambil saat saya sedang memancing ikan di sungai bersama.
                            </Card.Text>
                            <Button variant="outline-dark" size="sm" className="w-100 mt-2">View Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkSection;
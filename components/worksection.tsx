'use client'
import { Button, Card, Container, Row, Col, Badge } from 'react-bootstrap';

function WorkSection() {
    return (
        <Container id="work" className="py-5">
            <Row className='mb-5 text-center'>
                <Col md={8} className="mx-auto">
                    <h6 className="text-info text-uppercase fw-bold letter-spacing-2">Portfolio</h6>
                    <h2 className="display-6 fw-bold">Recent Projects</h2>
                    <p className="text-muted">Berikut adalah beberapa proyek terbaik yang pernah saya kerjakan, mulai dari website e-commerce hingga aplikasi manajemen.</p>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm border-0 hover-lift">
                        <Card.Img variant="top" src="/images/1.png" style={{height: '200px', objectFit: 'cover'}} />
                        <Card.Body>
                            <div className="mb-2">
                                <Badge bg="dark" className="me-1">Next.js</Badge>
                                <Badge bg="info" className="me-1">Bootstrap</Badge>
                            </div>
                            <Card.Title className="fw-bold">E-Commerce Dashboard</Card.Title>
                            <Card.Text className="text-muted small">
                                Sistem manajemen stok dan penjualan barang dengan analisis grafik real-time.
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
                                <Badge bg="primary" className="me-1">React</Badge>
                                <Badge bg="warning" text="dark" className="me-1">Firebase</Badge>
                            </div>
                            <Card.Title className="fw-bold">Coffee Shop App</Card.Title>
                            <Card.Text className="text-muted small">
                                Aplikasi pemesanan kopi berbasis web dengan fitur membership dan loyalty points.
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
                                <Badge bg="danger" className="me-1">Laravel</Badge>
                                <Badge bg="success" className="me-1">Vue</Badge>
                            </div>
                            <Card.Title className="fw-bold">Company Profile</Card.Title>
                            <Card.Text className="text-muted small">
                                Website profil perusahaan konstruksi dengan fitur galeri proyek dinamis.
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
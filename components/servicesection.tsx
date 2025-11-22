"use client";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function ServiceSection() {
    return (
        <section id="services" className="bg-light py-5">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col md={6} className="text-center">
                        <h6 className="text-info text-uppercase fw-bold">Services</h6>
                        <h2>What I Offer</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="text-center h-100 p-4 border-0 shadow-sm">
                            <div className="mb-3">
                                <Image src="images/about-icon1.png" alt="Web Dev" width={80} />
                            </div>
                            <h4 className="fw-bold">Web Development</h4>
                            <p className="text-muted">Pembuatan website responsif dari nol menggunakan teknologi terbaru seperti Next.js dan React.</p>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="text-center h-100 p-4 border-0 shadow-sm">
                            <div className="mb-3">
                                <Image src="images/about-icon2.png" alt="UI Design" width={80} />
                            </div>
                            <h4 className="fw-bold">UI/UX Design</h4>
                            <p className="text-muted">Merancang desain antarmuka yang menarik dan berfokus pada pengalaman pengguna yang nyaman.</p>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="text-center h-100 p-4 border-0 shadow-sm">
                            <div className="mb-3">
                                <Image src="images/about-icon3.png" alt="Maintenance" width={80} />
                            </div>
                            <h4 className="fw-bold">Web Maintenance</h4>
                            <p className="text-muted">Jasa pemeliharaan website, perbaikan bug, dan optimasi performa server.</p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ServiceSection;
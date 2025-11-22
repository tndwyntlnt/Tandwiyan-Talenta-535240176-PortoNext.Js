"use client"
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer id="footer" className="bg-dark text-white py-5">
            <Container>
                <Row>
                    <Col md={4} className="mb-4">
                        <h3 className="fw-bold">Tandwiyan<span className="text-info"> Talenta</span></h3>
                        <p className="text-secondary">
                            Terima kasih telah mengunjungi portofolio saya. Mari bekerja sama untuk menciptakan solusi digital yang hebat.
                        </p>
                    </Col>
                    
                    <Col md={4} className="mb-4">
                        <h5 className="text-white mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#home" className="text-secondary text-decoration-none">Home</a></li>
                            <li className="mb-2"><a href="#about" className="text-secondary text-decoration-none">About Me</a></li>
                            <li className="mb-2"><a href="#work" className="text-secondary text-decoration-none">Portfolio</a></li>
                            <li className="mb-2"><a href="#contact" className="text-secondary text-decoration-none">Contact</a></li>
                        </ul>
                    </Col>

                    <Col md={4}>
                        <h5 className="text-white mb-3">Connect With Me</h5>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-white"><i className="bi bi-instagram fs-4"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-linkedin fs-4"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-github fs-4"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-envelope fs-4"></i></a>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4 pt-4 border-top border-secondary">
                    <Col className="text-center text-secondary">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Tandwiyan Talenta. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>   
    )
}
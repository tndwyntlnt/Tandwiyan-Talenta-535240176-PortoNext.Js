'use client'
import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

export default function NavigationBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar 
            expand="lg" 
            fixed="top" 
            className={scrolled ? "shadow-sm bg-white" : "bg-transparent"}
            style={{ transition: "0.3s ease-in-out" }}
        >
            <Container>
                <Navbar.Brand href="#" className="fw-bold fs-4">
                    Tandwiyan<span className="text-info"> Talenta</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0 fw-medium">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#work">Portfolio</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                    </Nav>    
                    <Button variant="info" href="#contact" className="ms-lg-3 rounded-pill px-4 text-white">
                        Contact Me
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
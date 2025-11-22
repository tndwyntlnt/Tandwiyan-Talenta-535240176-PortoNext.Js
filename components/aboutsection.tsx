"use client";
import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap"; 

export default function AboutSection() {
  return (
    <> 
        <Row className="align-items-center justify-content-center">
          <Col md={5} className="mb-4 mb-md-0">
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-info rounded-4 translate-middle-x" style={{ zIndex: -1, opacity: 0.2, transform: 'rotate(-3deg)' }}></div>
              <Image 
                src="/images/about.jpg" 
                alt="About Me" 
                width={500}
                height={500}
                className="img-fluid rounded-4 shadow-lg img-hover-zoom"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Col>

          <Col md={6} className="offset-md-1">
            <h6 className="text-info text-uppercase fw-bold letter-spacing-2">Who Am I?</h6>
            <h2 className="display-6 fw-bold mb-4">About Me</h2>
            <p className="lead text-light mb-4">
              Halo! Saya adalah seorang pengembang web yang bersemangat menciptakan pengalaman digital.
            </p>
            <p className="mb-4">
              Fokus utama saya adalah menciptakan kode yang bersih dan desain yang user-friendly.
            </p>
          </Col>
        </Row>
    </>
  );
}
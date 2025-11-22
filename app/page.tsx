"use client";
import React from "react";

import { Container} from "react-bootstrap"; 

// Components
import HeroSection from "../components/herosection";
import AboutSection from "../components/aboutsection";
import WorkSection from "../components/worksection";
import VideoSection from "../components/videosection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section id="about" className="py-5">
        <Container>
            <AboutSection />
        </Container>
      </section>

      <section className="bg-light py-5">
        <WorkSection />
      </section>

      <VideoSection />
      
      <ServiceSection />
      
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
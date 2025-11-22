"use client"
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
    cta: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "Creative Web Developer",
            subtitle: "Membangun website modern yang cepat, responsif, dan dinamis menggunakan Next.js.",
            imageUrl: "/images/banner_01.png",
            cta: "Lihat Karya Saya"
        },
        {
            title: "UI/UX Enthusiast",
            subtitle: "Mendesain antarmuka yang ramah pengguna dan estetik.",
            imageUrl: "/images/banner_02.png",
            cta: "Hubungi Saya"
        },
        {
            title: "UI/UX Enthusiast",
            subtitle: "Mendesain antarmuka yang ramah pengguna dan estetik.",
            imageUrl: "/images/banner_03.png",
            cta: "Hubungi Saya"
        },
    ]

    return (
        <section id="home">
            <Carousel fade interval={5000} controls={false} indicators={true}>
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <div 
                            style={{
                                backgroundImage:`url(${slide.imageUrl})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "100vh",
                                position: "relative"
                            }}>
                            <div style={{
                                position: "absolute",
                                top: 0, left: 0, right: 0, bottom: 0,
                                backgroundColor: "rgba(0,0,0,0.5)"
                            }}></div>
                        </div>
                        <Carousel.Caption className="pb-5 mb-5">
                            <h1 className="display-3 fw-bold">{slide.title}</h1>
                            <p className="lead mb-4">{slide.subtitle}</p>
                            <Button variant="info" size="lg" className="text-white rounded-pill px-5">
                                {slide.cta}
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    )
}

export default HeroSection;
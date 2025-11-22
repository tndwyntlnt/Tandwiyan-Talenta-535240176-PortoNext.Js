"use client";
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

interface VideoProject {
    title: string;
    category: string;
    description: string;
    instagramId: string;
}

export default function VideoSection() {
    const videos: VideoProject[] = [
        {
            title: "Cinematic Reels",
            category: "Travel",
            description: "Highlight perjalanan singkat dengan teknik hyperlapse.",
            instagramId: "DI8ic7bpsSL"
        },
        {
            title: "Product Teaser",
            category: "Commercial",
            description: "Teaser produk minuman kopi kekinian.",
            instagramId: "DEu2c5TyQ4Y" 
        },
        {
            title: "Event Recap",
            category: "Event",
            description: "Dokumentasi acara musik kampus.",
            instagramId: "CtvJUT-tK3B" 
        }
    ];

    return (
        <section id="video-portfolio" className="py-5 bg-dark text-white">
            <Container>
                <Row className="mb-5 text-center">
                    <Col md={8} className="mx-auto">
                        <h6 className="text-info text-uppercase fw-bold letter-spacing-2">Content Creation</h6>
                        <h2 className="display-6 fw-bold">Instagram Portfolio</h2>
                        <p className="text-secondary">
                            Karya konten kreatif yang saya publikasikan di Instagram (Reels & Feeds).
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    {videos.map((video, index) => (
                        <Col md={6} lg={4} className="mb-4" key={index}>
                            <Card className="h-100 bg-secondary bg-opacity-10 border-0 shadow-sm text-white overflow-hidden">
                                
                                <div style={{ height: '550px', position: 'relative' }}>
                                    <iframe 
                                        src={`https://www.instagram.com/p/${video.instagramId}/embed`}
                                        width="100%" 
                                        height="100%" 
                                        style={{ border: 'none', overflow: 'hidden' }} 
                                        scrolling="no" 
                                        allowTransparency={true}
                                    ></iframe>
                                </div>
                                
                                <Card.Body className="d-flex flex-column justify-content-center text-center pb-4">
                                    <div>
                                        <Badge bg="warning" text="dark" className="mb-2">{video.category}</Badge>
                                        <Card.Title className="fw-bold h5">{video.title}</Card.Title>
                                        <Card.Text className="text-light opacity-75 small">
                                            {video.description}
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
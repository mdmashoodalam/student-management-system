import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="app-footer py-4 mt-4 text-light">
      <Container>
        <Row className="align-items-center gy-3">
          <Col xs={12} md={4} className="d-flex align-items-center gap-3">
            <div className="footer-logo">MA</div>
            <div>
              <div className="fw-bold">Md Mashood Alam</div>
              <div className="small text-muted">Java Full Stack Developer — Bengaluru, India</div>
            </div>
          </Col>

          <Col xs={12} md={4} className="text-md-center">
            <div className="d-flex flex-column align-items-md-center">
              <div className="d-flex align-items-center gap-2">
                <FaEnvelope />
                <a href="mailto:mashoodalam05@gmail.com" className="footer-link">mashoodalam05@gmail.com</a>
              </div>
              <div className="d-flex align-items-center gap-2 mt-1">
                <FaPhone />
                <a href="tel:+919572879110" className="footer-link">+91 95728 79110</a>
              </div>
              <div className="d-flex align-items-center gap-2 mt-1">
                <FaMapMarkerAlt />
                <span className="text-muted">Bengaluru, India</span>
              </div>
            </div>
          </Col>

          <Col xs={12} md={4} className="text-md-end">
            <div className="d-flex justify-content-md-end gap-3 align-items-center">
              <a href="https://github.com/mdmashoodalam" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mdmashoodalam/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link">
                <FaLinkedin size={20} />
              </a>
              <div className="text-muted small">© {year} Student Management System</div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

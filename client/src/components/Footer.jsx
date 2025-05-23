// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row className="footer-top">
          {/* LOGO + SOCIAL + CONTACT */}
          <Col md={5} lg={3} className="mb-4">
            <div className="footer-logo mb-3">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://static.insurancedekho.com/pwa/img/id-main-logo-new_4.svg"
                  alt="InsuranceDekho"
                  width="200"
                />
              </a>
            </div>

            <div className="footer-social">
              <a href="https://www.facebook.com/InsuranceDekho-362265937686333" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.youtube.com/channel/UCbgggXkm7oIpqS9ushr4jKw" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/insurancedekhoofficial/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/insurancedekho/" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.twitter.com/insurance_dekho/" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </div>

            <div className="footer-contact mt-3">
              <p><strong>Email:</strong> <a href="mailto:support@insurancedekho.com">support@insurancedekho.com</a></p>
              <p><strong>Call:</strong> <a href="tel:7551196989">755 1196 989</a></p>
            </div>
          </Col>

          {/* PRODUCTS */}
          <Col md={2} lg={2} sm={6} className="mb-4">
            <h6 className="footer-heading">Products</h6>
            <ul className="footer-links">
              {[
                ['Car Insurance', ],
                ['Bike Insurance', ],
                ['Health Insurance', ],
                ['Life Insurance', ],
                ['Term Insurance', ],
                ['Investment', ],
                ['Business', ],
                ['Travel Insurance', ],
                ['Tax Saving Schemes', ],
              ].map(([label, link]) => (
                <li key={label}><a href={link}>{label}</a></li>
              ))}
            </ul>
          </Col>

          {/* POLICY */}
          <Col md={2} lg={2} sm={6} className="mb-4">
            <h6 className="footer-heading">Policy</h6>
            <ul className="footer-links">
              {[
                ['Privacy Policy', ],
                ['Grievance Redressal', ],
                ['Fraud Detection', ],
                ['Shipping Policy', ],
                ['Terms of Use', ],
                ['Cancellation & Refund', ],
                ['E-Insurance Account', ],
              ].map(([label, link]) => (
                <li key={label}><a href={link}>{label}</a></li>
              ))}
            </ul>
          </Col>

          {/* GENERAL */}
          <Col md={2} lg={2} sm={6} className="mb-4">
            <h6 className="footer-heading">General</h6>
            <ul className="footer-links">
              {[
                ['Contact Us', '/contact-us'],
                ['Feedback', '/motor/feedback'],
                ['Fraud identification', '/fraud-identification'],
                ['Disclaimer', '/disclaimer'],
                ['Annual Reports', '/investor'],
                ['Solicitation Process', '/solicitation-process'],
                ['ID Alumni Page', 'https://alumni.insurancedekho.com/'],
                ['CSR', '/corporate-social-responsibility'],
              ].map(([label, link]) => (
                <li key={label}><a href={link}>{label}</a></li>
              ))}
            </ul>
          </Col>

          {/* METRICS */}
          <Col md={3} lg={3} sm={6}>
            <ul className="footer-metrics">
              {[
                ['11 Mn+', 'Happy Smiles'],
                ['4.8', 'Rated on Google'],
                ['95k+', 'Claims Served'],
              ].map(([value, label], index) => (
                <li key={index}>
                  <div className="metric-value">{value}</div>
                  <div className="metric-label">{label}</div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

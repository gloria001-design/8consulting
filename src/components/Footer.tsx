import React from 'react';
import './style/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Brand Column */}
        <div className="footer-brand">
          <a href="/" className="footer-logo-link">
            <img
              src="https://i.postimg.cc/VvggfbxD/Frame-2.png"
              alt="BTH Consulting Limited"
              className="footer-logo"
            />
          </a>

          <p className="footer-description">
            Shaping careers and building futures through consulting, training
            and youth-focused development programs that create exposure,
            clarity and direction.
          </p>

          <div className="social-links">
            <a
              href="#"
              className="social-link"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="#"
              className="social-link"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="#"
              className="social-link"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick link</h3>

          <nav className="footer-navigation">
            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
            <a href="/about">About us</a>
            <a href="/services">Service</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>

        {/* Contact Details */}
        <div className="footer-column footer-contact">
          <h3 className="footer-heading">Get in touch</h3>

          <address>
            <a href="tel:+2348000000000">+234 800 000 0000</a>
            <a href="mailto:hello@bthconsulting.com">
              hello@bthconsulting.com
            </a>
            <span>Festac, Lagos, Nigeria</span>
          </address>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="copyright">
          © 2026 BTH Consulting Limited. All Rights Reserved.
        </p>

        <div className="footer-legal-links">
          <a href="/privacy-policy">Policy</a>
          <span className="legal-separator">·</span>
          <a href="/terms-of-service">Terms of service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

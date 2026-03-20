import React from 'react';
import './Footer.css'; // Assuming we'll create this CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="availability-badge"></div>
            <h1 className="cta">Let's make something great</h1>
            <div className="contact-info">
                <p>Email: contact@example.com</p>
                <p>Phone: +1 (234) 567-8901</p>
            </div>
            <div className="footer-links">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="copyright">© 2026 Your Company. All rights reserved.</div>
            <div className="hello-kitty">
                {/* SVG code for Hello Kitty */}
                <svg /* SVG properties */>
                    {/* Hello Kitty SVG content here */}
                </svg>
            </div>
        </footer>
    );
};

export default Footer;

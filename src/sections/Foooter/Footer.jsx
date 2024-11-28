import React from "react";
import "./footer.css";

function Footer() {
    return (
        <div className="container-full footer-full">
            <div className="container footer d-flex align-items-start justify-content-between">
                
                {/* Column 1: Logo and Description */}
                <div className="col-4 footer-item">
                    <h3>OmStudio</h3>
                    <p>
                        Discover the path to balance and mindfulness with our expert-led yoga
                        classes, designed for all levels in a serene and welcoming environment.
                    </p>
                </div>

                {/* Column 2: Navigation Links */}
                <div className="col-4 footer-item">
                    <h3>Explore</h3>
                    <ul>
                        <li><a href="#benefits">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#classes">Classes</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Information */}
                <div className="col-4 footer-item">
                    <h3>Contact</h3>
                    <p>Email: info@ryandornan.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Yoga Lane, Wellness City</p>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;

import React from 'react';
import './About.css'; // Assuming a CSS file for styling

const About = () => {
    return (
        <section>
            <div className="about-container">
                <div className="about-left">
                    <h2 className="accented-text">Building at the edge of content & code.</h2>
                </div>
                <div className="about-right">
                    <p>As a passionate developer, I integrate creative design with technical precision.</p>
                    <p>I thrive on solving complex problems and crafting user-centric experiences.</p>
                    <p>My skills include React, JavaScript, and modern web practices, always striving to stay ahead of trends.</p>
                    <div className="skills">
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">CSS</span>
                        <span className="skill-tag">HTML</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
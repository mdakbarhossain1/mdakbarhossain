import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LightSpeed from 'react-reveal/LightSpeed';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-bg">
                <Container>
                    <div className="about-main">
                        <p className="title">
                            About
                        </p>
                        <LightSpeed left>
                            <p className="decribetion">
                                My name is Md Akbar Hossain.
                                <br />
                                <br />
                                I am a full-stack Jr. web developer waiting for an opportunity to demonstrate my skills. Currently, I am working with MERN <strong>( MongoDB, ExpressJS, ReactJS, Node.JS )</strong>  technologies and am pretty much comfortable working with them. I have done various projects and still working on more.
                                <br />
                                <br />
                                I am available for hiring at the moment.
                            </p>
                        </LightSpeed>
                    </div>


                </Container>
            </div>


            <div className="nevagation-btn">
                <Link to="/projects"><span className="fd-btn"><i class="fas fa-arrow-left"></i> Projects</span></Link>
                <Link to="/contact"><span className="fd-btn">Contact Us <i class="fas fa-arrow-right"></i></span></Link>
            </div>
        </div>
    );
};

export default About;
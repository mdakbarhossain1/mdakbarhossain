import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Home.css';

const Home = () => {
    return (
        <div className="home-main">
            <Container>
                <div className="home-body">
                    <Fade top>
                        <div className="home-body-info">
                            <p className="title text-center">
                                Hello, I'm Md Akbar Hossain
                            </p>
                            <p className="sub-title">I'm junior Frontend Developer </p>

                            <Link to="/projects"><span className="fd-btn">Projects <i class="fas fa-arrow-right"></i></span></Link>
                        </div>
                    </Fade>
                </div>
            </Container>
        </div>
    );
};

export default Home;
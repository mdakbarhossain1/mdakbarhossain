import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import jasminePerfume from '../../image/jasminer-perfume.png'
import bongoTour from '../../image/bongo-tour.png'
import teleDoc from '../../image/tele-doc.png'

import './MyWorks.css';

const MyWorks = () => {
    return (
        <div className="my-5">
            <h1 className="text-center my-4">My Projects</h1>

            <Container>
                <Row className="my-3 py-5">
                    <Col md={4} sm={12}>
                        <div>
                            <img className="w-100" src={jasminePerfume} alt="..." />
                            <div className="text-center mt-4 site-button">
                                <a href="https://github.com/As-Shovo/jasmine-perfume" target="/_blank"> <button className="btn btn-primary me-4">GitHub</button></a>
                                <a href="https://jasmine-101.web.app/" target="/_blank"> <button className="btn btn-info">Live site</button></a>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="text-center mt-4">
                            <img className="w-100" src={bongoTour} alt="..." />
                            <div className="text-center mt-4 site-button">
                                <a href="https://github.com/As-Shovo/bongo-touriest" target="/_blank"> <button className="btn btn-primary me-4">GitHub</button></a>
                                <a href="https://jasmine-101.web.app/" target="/_blank"> <button className="btn btn-info">Live site</button></a>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="text-center mt-4">
                            <img className="w-100" src={teleDoc} alt="..." />
                            <div className="text-center mt-4 site-button">
                                <a href="https://github.com/As-Shovo/tele-doc" target="/_blank"> <button className="btn btn-primary me-4">GitHub</button></a>
                                <a href="https://tele--doc.web.app/home" target="/_blank"> <button className="btn btn-info">Live site</button></a>
                            </div>
                        </div>
                    </Col>


                </Row>
            </Container>
        </div>
    );
};

export default MyWorks;
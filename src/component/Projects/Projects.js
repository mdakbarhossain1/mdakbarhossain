import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import './Projects.css';


const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
            })
    }, [])



    console.log(projects)

    return (
        <div>
            <div className="project-background">
                <h1 className="text-center">My Projects</h1>

                <Container>
                    <div className="project-container">
                        <Row >
                            {
                                projects.map(project => <Col key={project.id} md={4} sm={12}>
                                    <Flip left>
                                        <div>
                                            <img className="w-100" src={project.projectTitleImg} alt="..." />
                                            <div style={{ height: "180px" }}>
                                                <h2>{project.projectName}</h2>
                                                <p>{project.dec}</p>
                                            </div>
                                            <div className="text-center">
                                                <Link to={`/projects/${project.id}`}><button className="btn  fd-btn">Explore more</button></Link>

                                            </div>
                                        </div>
                                    </Flip>
                                </Col>)
                            }
                            {/* <Col md={4} sm={12}>
                                <Flip left>
                                    <div className="text-center">
                                        <img className="w-100" src={bongoTour} alt="..." />
                                        <div className="text-center mt-4 site-button">
                                            <a href="https://github.com/As-Shovo/bongo-touriest" target="/_blank"> <button className="btn fd-btn me-4">GitHub</button></a>
                                            <a href="https://bongotoursist.web.app/" target="/_blank"> <button className="btn fd-btn">Live site</button></a>
                                        </div>
                                    </div>
                                </Flip>
                            </Col>
                            <Col md={4} sm={12}>
                                <Flip left>
                                    <div className="text-center">
                                        <img className="w-100" src={teleDoc} alt="..." />
                                        <div className="text-center mt-4 site-button">
                                            <a href="https://github.com/As-Shovo/tele-doc" target="/_blank"> <button className="btn fd-btn me-4">GitHub</button></a>
                                            <a href="https://tele--doc.web.app/home" target="/_blank"> <button className="btn fd-btn">Live site</button></a>
                                        </div>
                                    </div>
                                </Flip>
                            </Col> */}
                        </Row>
                    </div>

                    <div className="nevagation-btn">
                        <Link to="/home"><span className="fd-btn"><i class='bx bx-chevron-left' ></i> Home</span></Link>
                        <Link to="/about"><span className="fd-btn">About <i class='bx bx-chevron-right' ></i></span></Link>
                    </div>
                </Container>
            </div>
        </div>
    );

};

export default Projects;
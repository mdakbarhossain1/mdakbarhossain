import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const DetailsPeojets = () => {
    const { id } = useParams();

    const [detailsProject, setDetailsProject] = useState([]);

    useEffect(() => {
        fetch('../projects.json')
            .then(res => res.json())
            .then(data => {
                setDetailsProject(data)
            })
    }, [])

    const selectedData = detailsProject?.filter(dt => dt.id == id);

    // console.log(detailsProject)
    console.log(selectedData)
    // const details = selectedData[0];
    // const detailsimg = details?.detailsImg ;

    return (
        <div>
            <h1 className="text-center py-4" style={{ color: "white" }}>Details Projects {selectedData[0]?.projectName}</h1>
            <Container>
                <Row>
                    <Col md={3} sm={12}></Col>
                    <Col md={6} sm={12}>
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={selectedData[0]?.projectTitleImg}
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={selectedData[0]?.detailsImg}
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={selectedData[0]?.detailsImgs}
                                        alt="First slide"
                                    />

                                </Carousel.Item>


                            </Carousel>

                            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", margin:"20px 0" }}>
                                <a href={selectedData[0]?.github} style={{textDecoration:"none"}} target="/_blank"> <button className="btn fd-btn"> Git Hub</button> </a>
                                <a href={selectedData[0]?.liveSite} style={{textDecoration:"none"}} target="/_blank"> <button className="btn fd-btn"> Live Site</button> </a>
                            </div>

                        </div>
                    </Col>
                    <Col md={3} sm={12}></Col>
                </Row>
            </Container>
        </div >
    );
};

export default DetailsPeojets;
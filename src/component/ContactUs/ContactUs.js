import React, { useRef } from 'react';
import emailjs, { init } from 'emailjs-com';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import './ContactUs.css';

init("user_lnSaZ8OSKavuxsfUOVHWJ");
export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4gpnnxd', 'template_4xn8ygo', e.target, 'user_lnSaZ8OSKavuxsfUOVHWJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

    };

    return (
        <div>
            <Container className="fixed-contact">
                <p className="title text-center">Contact Form</p>
                <div className="py-5">
                    <Zoom top>
                        <Row>
                            <Col md={3}></Col>
                            <Col md={6} sm={12}>
                                <form ref={form} onSubmit={sendEmail} className="contact-form">
                                    <label>Name</label>
                                    <input type="text" placeholder="Name" name="user_name" />
                                    <br />
                                    <label>Email</label>
                                    <input type="email" placeholder="Email" name="user_email" />
                                    <br />
                                    <label>Message</label>
                                    <textarea placeholder="Message" name="message" />
                                    <br />
                                    <input type="submit" className="fd-btn submit-btn" value="Send" />
                                </form>
                            </Col>
                            <Col md={3} sm={12}></Col>
                        </Row>
                    </Zoom>
                </div>

                <div className="nevagation-btn">
                    <Link to="/about"><span className="fd-btn"><i class="fas fa-arrow-left"></i> About</span></Link>
                    <Link to="/home"><span className="fd-btn">Home <i class="fas fa-arrow-right"></i></span></Link>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;
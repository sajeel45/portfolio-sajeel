import { Container,Row,Col } from "react-bootstrap";
import "./Contact.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Contact = (props) => {
    const contactItems = props.contactItems;
    return(
        <section className="contact-section" id="contact">
            <Container>
            <div className="heading">
                <h1>Contact Me</h1>
            </div>
            <div className="contact-section-main-wrapper">
                <Row>
                    {contactItems.map((item,index)=>(
                    <Col lg="6" md="6" sm="12">
                        <div className="contact-item-wrapper" key={index}>
                            <div className="item-icon-wrapper">
                                <span>{item.icon}</span>
                            </div>
                            <div className="item-content-wrapper px-4">
                                <span>{item.title}</span>
                                <p className="mt-4">{item.content}</p>
                            </div>
                        </div>
                    </Col>
                    ))}
                </Row>
            </div>
            <Col lang="12">
                <div className="social-bottom-wrappper">
            <h4 className="text-center py-3">My Social links</h4>
                <div className="social-links-wrapper">
                    
                <Link to="https://www.facebook.com/me.sajeel45/"><span><FaFacebook  size={40}/></span></Link>
                  <Link to="https://www.linkedin.com/in/muhammad-sajeel-34405b221/"><span><FaLinkedin size={40}/></span></Link>
                  <Link to="https://www.instagram.com/i_m_sajeel/"><span><FaInstagram size={40}/></span></Link>
                  <Link to="https://github.com/sajeel45"><span><FaGithub size={40}/></span></Link>
                </div>
                </div>
            </Col>
            <Col lg="12">
                
            </Col>
            </Container>
            <div className="copyright-section">
                © 2023 Muhammad Sajeel - All rights reserved.
                </div>
        </section>
    )
};

export default Contact;
"use client"
import { Container,Row,Col } from "react-bootstrap"
import banner from "../../../assets/banner/home-banner.jpg";
import profilePic from "../../../assets/banner/profile-pic.png";
import {FaGithub,FaInstagram,FaLinkedin,FaFacebook,FaRocket,FaUser} from "react-icons/fa" ;
import Typist from "react-text-typist";
import "./Banner.css"
import { Link } from "react-scroll";

const Banner = ()=>{
    return(

        
        /* Banner Section starts Here */
        <section style={{backgroundImage:`url(${banner})`}} className="banner-wrapper" id="home">
            <Container>
                <Row>
                    <Col lg="5" md="12" sm="12">
                        <div className="image-wrapper">
                            <img src={profilePic} alt="profile-pic"/>
                        </div>
                    </Col>
                    <Col lg="7" md="12" sm="12">
                        <div className="banner-content-wrapper">
                            <h2>HI There!</h2>
                            <h3>
                                I'M <span ><Typist className={'typing-color'} sentences={['Muhammad Sajeel','Web Developer','React JS Developer','Next JS Developer','Web Designer','Frontend Developer']} loop="true"/></span>
                            </h3>
                            <span className="myDescription">I'M Web Designer and Developer with over 2+ years of experience and have developed beautiful web applications through carefully crafted design.</span>
                        </div>
                        <div className="banner-social-icons-wrapper">
                            <Link to="https://www.facebook.com/me.sajeel45/"><FaFacebook color="white" size={30}/></Link>
                            <Link to="https://github.com/sajeel45"><FaGithub color="white" size={30}/></Link>
                            <Link to="https://www.instagram.com/i_m_sajeel/"><FaInstagram color="white" size={30}/></Link>
                            <Link to="https://www.linkedin.com/in/muhammad-sajeel-34405b221/"><FaLinkedin color="white" size={30}/></Link>
                        </div>
                    </Col>
                </Row>
                <Col lg="12" md="12" sm="12">
                <div className="banner-buttons-wrapper">
                            <Link className="about-me-button" to="about"><FaUser color="white" style={{marginRight:"5px"}}/>More About Me</Link>
                            <Link className="my-projects-button" to="portfolio"><FaRocket color="white" style={{marginRight:"5px"}}/>My Projects</Link>
                        </div>
                </Col>
            </Container>
        </section>
        /* Banner Section Ends Here */
    )
}
export default Banner;
"use client"
import { Container,Row,Col } from "react-bootstrap"
import banner from "../../../assets/banner/home-banner.jpg";
import profilePic from "../../../assets/banner/profile-pic.png";
import {FaGithub,FaInstagram,FaLinkedin,FaFacebook,FaRocket,FaUser} from "react-icons/fa" ;
import "./Banner.css"
import { Link } from "react-router-dom";

const Banner = ()=>{
    return(

        
        /* Banner Section starts Here */
        <section style={{backgroundImage:`url(${banner})`}} className="banner-wrapper">
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
                                I'M <span style={{color:"#64bd00"}}>Muhammad Sajeel</span>
                            </h3>
                            <span>I'M Web Designer and Developer with over 2+ years of experience and beautiful web applications through carefully crafted design.</span>
                        </div>
                        <div className="banner-social-icons-wrapper">
                            <Link><FaFacebook color="white" size={30}/></Link>
                            <Link><FaGithub color="white" size={30}/></Link>
                            <Link><FaInstagram color="white" size={30}/></Link>
                            <Link><FaLinkedin color="white" size={30}/></Link>
                        </div>
                        <div className="banner-buttons-wrapper">
                            <Link className="about-me-button"><FaUser color="white" style={{marginRight:"5px"}}/>More About Me</Link>
                            <Link className="my-projects-button"><FaRocket color="white" style={{marginRight:"5px"}}/>My Projects</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        /* Banner Section Ends Here */
    )
}
export default Banner;
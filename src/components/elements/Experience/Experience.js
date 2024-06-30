import { Container,Row,Col } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Experience.css";

const Experience = (props) => 
{
    const education = props.education;
    const experience = props.experience;
    return(
        <section className="experience-section-wrapper" id="experience">
            <Container>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
                <div className="heading text-center py-5">
                    <h1>Experience & <span style={{color:"#64bd00"}}>Education</span></h1>
                </div>
                </AnimationOnScroll>
                <Row>
                    <Col lg="6">
                        
                        <div className="education-section-main-wrapper">
                    <h3 className="text-center mb-4">Education</h3>
                        <div className="education-section-wrapper">
                            {education.map((item,index)=>(
                                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
                            <div className="education-single-item-wrapper" key={index}>
                                <div className="institute-title-wrapper">
                                    <span>{item.title}</span>
                                </div>
                                <div className="icons-wrapper">
                                    <span>{item.icon1}<span style={{marginLeft:"5px"}}>{item.institute}</span></span>
                                    <span>{item.icon2}<span style={{marginLeft:"5px"}}>{item.duration}</span></span>
                                </div>
                                <div className="description-wrapper">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            </AnimationOnScroll>
                            ))}
                        </div>
                        </div>
                        
                    </Col>
                    <Col lg="6">
                        
                        <div className="experience-section-main-wrapper">
                            <h3 className="mb-4">Experience</h3>
                            <div className="experience-section-wrapper">
                                {experience.map((item,index)=>(
                                    <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true">
                                <div className="experience-single-item-wrapper" key={index}>
                                    <div className="institute-title-wrapper">
                                        <span>{item.title}</span>
                                    </div>
                                    <div className="icons-wrapper">
                                    <span>{item.icon1}<span style={{marginLeft:"5px"}}>{item.institute}</span></span>
                                    <span>{item.icon2}<span style={{marginLeft:"5px"}}>{item.duration}</span></span>
                                    </div>
                                    <div
                                     className="description-wrapper">
                                        <p>{item.description}</p>
                                     </div>
                                </div>
                                </AnimationOnScroll>
                                ))}
                                
                            </div>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Experience;
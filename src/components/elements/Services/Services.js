import { Container,Row,Col } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css"
import "./Services.css";

const Services = (props) =>{
    const services = props.services;
    return(
        <section className="services-section-wrapper" id="services">
            <Container>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
            <div className="heading">
                <h1 className="mb-3 text-center" >Services</h1>
            </div>
            </AnimationOnScroll>
            <Row>
                {services.map((item,index)=>(
                <Col lg="4">
                    <div className="services-section-main-wrapper">
                        <AnimationOnScroll animateIn="animate__lightSpeedInRight" animateOnce="true">
                        <div className="single-service-item-wrapper" key={index}>
                            <div className="service-icon-wrapper">
                                <span>{item.icon}</span>
                            </div>
                            <div className="service-content-wrapper">
                                <h3 className="text-center">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            
                        </div>
                        </AnimationOnScroll>
                    </div>
                    
                </Col>
                ))}
            </Row>
            </Container>
        </section>
    )
}
export default Services;
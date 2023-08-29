import { Container,Row,Col } from "react-bootstrap";
import "./Services.css";

const Services = (props) =>{
    const services = props.services;
    return(
        <section className="services-section-wrapper">
            <Container>
            <div className="heading">
                <h1 className="mb-3 text-center" >Services</h1>
            </div>
            <Row>
                {services.map((item,index)=>(
                <Col lg="4">
                    <div className="services-section-main-wrapper">
                        
                        <div className="single-service-item-wrapper" key={index}>
                            <div className="service-icon-wrapper">
                                <span>{item.icon}</span>
                            </div>
                            <div className="service-content-wrapper">
                                <h3 className="text-center">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        
                    </div>
                </Col>
                ))}
            </Row>
            </Container>
        </section>
    )
}
export default Services;
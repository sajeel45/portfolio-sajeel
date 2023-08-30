import { Container, Row, Col } from "react-bootstrap";
import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = (props) => {
  const projects = props.projects;
  return (
    <>
      <section className="portfolio-section">
        <Container>
          <div className="heading">
            <h1>My Portfolio</h1>
          </div>
          <div className="projects-wrapper">
            <Row>
            {projects.map((item, index) => (
              <Col lg="6" md="6" sm="12">
                
                  <div className="project-single-wrapper" key={index}>
                    <div className="project-image-wrapper">
                        <img src={item.src} alt="project-thumbnail"/>
                    </div>
                    <div className="project-content-wrapper">
                      <div className="project-title-wrapper">
                        <Link to={item.link}><h3 className="text-center">{item.title}</h3></Link>
                      </div>
                      <div className="project-description-wrapper">
                        <p>{item.description}</p>
                      </div>
                      <div className="project-link-wrapper">
                        <span>Click <Link to={item.link}>here</Link> to view it Live! </span>
                      </div>
                    </div>
                    
                  </div>
                
              </Col>
              
              ))}
            </Row>
            <h1 style={{color:"#64BD00"}}>More Projects Coming Soon... Keep Visiting</h1>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Portfolio;

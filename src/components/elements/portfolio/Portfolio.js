import { Container, Row, Col } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = (props) => {
  const projects = props.projects;
  return (
    <>
      <section className="portfolio-section" id="portfolio">
        <Container>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
            <div className="heading">
              <h1>My Portfolio</h1>
            </div>
          </AnimationOnScroll>
          <div className="projects-wrapper">
            <Row>
              {projects.map((item, index) => (
                <Col lg="6" md="6" sm="12">
                  <AnimationOnScroll
                    animateIn="animate__flipInY"
                    animateOnce="true"
                  >
                    <div className="project-single-wrapper" key={index}>
                      <div className="project-image-wrapper">
                        {item.id > 6 ? (
                          <iframe
                            width="560"
                            height="315"
                            src={item.src}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                          ></iframe>
                        ) : (
                          <img src={item.src} alt="project-thumbnail" />
                        )}
                      </div>

                      <div className="project-content-wrapper">
                        <div className="project-title-wrapper">
                          <Link to={item.link} target="blank">
                            <h3 className="text-center">{item.title}</h3>
                          </Link>
                        </div>
                        <div className="project-description-wrapper">
                          <p>{item.description}</p>
                        </div>
                        <div className="project-link-wrapper">
                          <span>
                            Click <Link to={item.link}>here</Link> to view it{" "}
                            <span style={{ color: "red" }}>Live! </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </AnimationOnScroll>
                </Col>
              ))}
            </Row>
            
            <h1 style={{ color: "#64BD00" }}>
              More Projects Coming Soon... Keep Visiting
            </h1>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Portfolio;

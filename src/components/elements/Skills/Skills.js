import { Container, Row, Col } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import "./Skills.css";

const Skills = (props) => {
  const skills = props.skills;
  const skillset1 = skills.slice(0, 4);
  const skillset2 = skills.slice(4);
  return (
    <section className="skills-section-wrapper" id="skills">
      <Container>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
          <div className="heading">
            <h1>Skills</h1>
          </div>
        </AnimationOnScroll>
        <Row>
          <Col lg="6">
            <div className="skills-wrapper">
              {skillset1.map((item, index) => (
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
                  <div className="skill-wrapper mb-3" key={index}>
                    <div className="skill-content">
                      <span>{item.skill}</span>
                      <span>{item.percentage}</span>
                    </div>
                    <div className="skill-bar"></div>
                  </div>
                </AnimationOnScroll>
              ))}
            </div>
          </Col>
          <Col lg="6">
            <div className="skills-wrapper">
              {skillset2.map((item, index) => (
                <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true">
                  <div className="skill-wrapper mb-3" key={index}>
                    <div className="skill-content">
                      <span>{item.skill}</span>
                      <span>{item.percentage}</span>
                    </div>
                    <div className="skill-bar"></div>
                  </div>
                </AnimationOnScroll>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;

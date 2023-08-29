import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

const About = (props) => {
  const personalinfo = props.personalinfo;
  const contactinfo = props.contactinfo;
  return (
    /* About Section Starts from Here */
    <section>
      <div className="about-wrapper">
        <Container>
          <div className="heading">
            <h1>
              About <span>me</span>
            </h1>
            <div className="separator"></div>
          </div>
          <Row>
            <Col lg="6">
              <div className="about-content-wrapper">
                <h4>
                  Hello! I'M <span>SAJEEL</span>
                </h4>
                <p>
                  Meet Sajeel, a skilled and passionate web developer who brings
                  digital ideas to life through lines of code. With a keen eye
                  for design aesthetics and a deep understanding of programming
                  languages such as HTML, CSS, and JavaScript.
                </p>
              </div>
            </Col>
            <Col lg="3">
              <div className="personal-info-wrapper">
                {personalinfo.map((item,index)=>(
                  <div key={index}>
                      <span>{item.title}<span style={{ color: "#64BD00" }}>{item.description}</span></span>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg="3">
                <div className="contact-info-wrapper">
                  {contactinfo.map((item,index)=>(
                    <div key={index}>
                        <span>{item.title}<span style={{ color: "#64BD00" }}>{item.description}</span></span>
                    </div>
                  ))}
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    /* About Section Ends Here */
  );
};

export default About;

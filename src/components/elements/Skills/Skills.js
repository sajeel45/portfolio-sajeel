import { Container,Row,Col } from "react-bootstrap";
import "./Skills.css";

const Skills = (props) => {
    const skills = props.skills;
    const skillset1 = skills.slice(0,4);
    const skillset2 = skills.slice(4);
    return(
        <section className="skills-section-wrapper">
            <Container>
            <div className="heading">
                <h1>Skills</h1>
            </div>
            <Row>
                <Col lg="6">
                    <div className="skills-wrapper">
                        {skillset1.map((item,index)=>(
                    <div className="skill-wrapper mb-3" key={index}>
                        <div className="skill-content">
                            <span>{item.skill}</span>
                            <span>{item.percentage}</span>
                        </div>
                        <div className="skill-bar">
                        </div>
                    </div>
                        ))}
                    </div>
                </Col>
                <Col lg="6">
                <div className="skills-wrapper">
                        {skillset2.map((item,index)=>(
                    <div className="skill-wrapper mb-3" key={index}>
                        <div className="skill-content">
                            <span>{item.skill}</span>
                            <span>{item.percentage}</span>
                        </div>
                        <div className="skill-bar">
                        </div>
                    </div>
                        ))}
                    </div>
                </Col>
            </Row>
            </Container>
        </section>
    )
}

export default Skills;
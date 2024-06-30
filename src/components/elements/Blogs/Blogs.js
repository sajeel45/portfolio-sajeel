import { Container, Row, Col } from "react-bootstrap";
import { FaCalendar, FaComment, FaChevronRight } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css"
import "./Blogs.css";
import { Link } from "react-router-dom";

const Blogs = (props) => {
  const blogs = props.blogs;
  return (
    <section className="blogs-section" id="blogs">
      <Container>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="heading">
          <h1>My Blogs</h1>
        </div>
        </AnimationOnScroll>
        <div className="blogs-wrapper">
          <Row>
            {blogs.map((item, index) => (
              <Col lg="4" md="6" sm="12">
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                <div className="single-blog-wrapper" key={index}>
                  <div className="blog-image-wrapper">
                    <img src={item.src} alt="blog-thumb" />
                  </div>
                  <div className="blog-content-wrapper">
                    <div className="blog-title-wrapper text-center">
                      <span>{item.title}</span>
                    </div>
                    <div className="blogs-icons-wrapper py-2">
                      <span>
                        <FaCalendar color="#64BD00" className="mx-2" />
                        {item.date}
                      </span>
                      <span>
                        <FaComment color="#64BD00" className="mx-2" />
                        {item.comments}
                      </span>
                    </div>
                    <div className="blog-description-wrapper py-2">
                      <p>{item.description}</p>
                    </div>
                    <div className="blog-button-wrapper">
                      <Link to={"#"}>
                        Read More <FaChevronRight color="#64BD00" />
                      </Link>
                    </div>
                  </div>
                </div>
                </AnimationOnScroll>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;

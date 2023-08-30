import { Container, Row, Col } from "react-bootstrap";
import { FaCalendar, FaComment, FaChevronRight } from "react-icons/fa";
import "./Blogs.css";
import { Link } from "react-router-dom";

const Blogs = (props) => {
  const blogs = props.blogs;
  return (
    <section className="blogs-section">
      <Container>
        <div className="heading">
          <h1>My Blogs</h1>
        </div>
        <div className="blogs-wrapper">
          <Row>
            {blogs.map((item, index) => (
              <Col lg="4" md="6" sm="12">
                <div className="single-blog-wrapper">
                  <div className="blog-image-wrapper">
                    <img src={item.src} alt="blog-image" />
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
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;

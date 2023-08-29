import { Container,Row,Col,Navbar,Nav,NavLink } from "react-bootstrap";
import logo from "../../../assets/logo/logo.png";
import { FaHome,FaRocket,FaBriefcase,FaPen,FaUser,FaAddressBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () =>{
    return(
        <section className="navbar-wrapper">
      <Container>
        <Row>
          <Col lg="3" md="3" sm="12">
            <div className="navbar-logo-wrapper">
                <Link href={"/"}>
              {/* <img src={logo} alt="logo" /> */}
              <h3>SAJEEL</h3>
              </Link>
            </div>
          </Col>
          <Col lg="9" md="3" sm="12">
            <div className="navbar-links-wrapper">
              <Navbar expand="lg" variant="light">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto nav-dropdown-link">
                    <NavLink>
                      <Link href={"/"} className="nav-link-item">
                        <FaHome style={{marginRight:"5px"}}/>Home
                      </Link>
                    </NavLink>
                    <NavLink>
                      <Link href="#experience-section" className="nav-link-item">
                      <FaUser style={{marginRight:"5px"}}/>About
                      </Link>
                    </NavLink>
                    <NavLink>
                      <Link href={"/"} className="nav-link-item">
                      <FaRocket style={{marginRight:"5px"}}/>Services
                      </Link>
                    </NavLink>
                    <NavLink>
                      <Link href={"/"} className="nav-link-item">
                      <FaBriefcase style={{marginRight:"5px"}}/>Projects
                      </Link>
                    </NavLink>
                    <NavLink>
                      <Link href={"/"} className="nav-link-item">
                      <FaPen style={{marginRight:"5px"}}/>Blogs
                      </Link>
                    </NavLink>
                    <NavLink>
                      <Link href={"/"} className="nav-link-item">
                      <FaAddressBook style={{marginRight:"5px"}}/>Contact
                      </Link>
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    )
};

export default Header;
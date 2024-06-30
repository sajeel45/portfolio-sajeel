import { Container,Row,Col,Navbar,Nav,NavLink } from "react-bootstrap";
import { useState } from "react";
import { FaHome,FaRocket,FaBriefcase,FaPen,FaUser,FaAddressBook,FaCubes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Header.css";


const Header = () =>{  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

    return(
        <section className={`navbar-wrapper`}>
      <Container>
        <Row>
          <Col lg="2" md="3" sm="12">
            <div className="navbar-logo-wrapper">
                <Link to="home" style={{fontSize:
                "24px",color:"white",fontWeight:"700"}}>
              SAJEEL
              </Link>
            </div>
          </Col>
          <Col lg="10" md="3" sm="12">
            <div className="navbar-links-wrapper">
              <Navbar expand="lg" variant="light">
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}/>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className={`me-auto nav-dropdown-link ${menuOpen ? 'show' : ''}`}>
                    <NavLink>
                      <Link to="home"  className="nav-link-item" onClick={closeMenu}>
                        <FaHome style={{marginRight:"5px"}}/>Home
                      </Link>
                    </NavLink>
                    <NavLink>
                      <Link to="about"  className="nav-link-item" onClick={closeMenu}>
                      <FaUser style={{marginRight:"5px"}}/>About
                      </Link>
                    </NavLink>
                    <NavLink>
                      <Link to="skills" className="nav-link-item" onClick={closeMenu}>
                      <FaCubes style={{marginRight:"5px"}}/>Skills
                      </Link>
                    </NavLink>
                    <NavLink>
                      <Link to="services"  className="nav-link-item" onClick={closeMenu}>
                      <FaRocket style={{marginRight:"5px"}}/>Services
                      </Link>
                    </NavLink>
                    <NavLink>
                      <Link to="portfolio"  className="nav-link-item" onClick={closeMenu}>
                      <FaBriefcase style={{marginRight:"5px"}}/>Projects
                      </Link>
                    </NavLink>
                    <NavLink>
                      <Link to="blogs" className="nav-link-item" onClick={closeMenu}>
                      <FaPen style={{marginRight:"5px"}}/>Blogs
                      </Link>
                    </NavLink>
                    
                    <NavLink>
                      <Link to="contact" className="nav-link-item" onClick={closeMenu}>
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
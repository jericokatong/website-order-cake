import { Nav, Container, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "./styles.css";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="logo fw-semibold fs-5">
          Bakery Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar text-center">
            <Nav.Link href="#home" className="mouseHover p-3">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="mouseHover p-3">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="mouseHover p-3">
              Products
            </Nav.Link>
            <Nav.Link href="#link" className="mouseHover p-3">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

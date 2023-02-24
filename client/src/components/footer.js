import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="container-footer pt-5 pb-5">
        <Container>
          <Row className="d-flex gap-5 align-items-center flex-column flex-sm-row flex-md-row flex-lg-row">
            <Col className="">
              <h3 className="logo text-center text-sm-start text-md-start text-lg-start">Bakery Store</h3>
            </Col>
            <Col className="d-flex justify-content-end align-items-center align-items-sm-end align-items-md-end align-items-lg-end flex-column">
              <div className="icon-sosmed">
                <i class="uil uil-instagram me-3"></i>
                <i class="uil uil-facebook"></i>
              </div>
              <p className="text-center text-sm-start text-md-start text-lg-end">Copyright 2023. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;

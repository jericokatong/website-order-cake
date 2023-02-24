import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import map from "../images/map.png";

const Contact = () => {
  return (
    <section id="contact" className="mt-5">
      <h2 className="text-center title-contact">Contact Me</h2>
      <Container fluid className="container-contact mt-4">
        <Container>
          <Row className="pt-5 pb-5">
            <Col className="d-flex justify-content-center align-items-center gap-5 flex-column flex-sm-column flex-md-column flex-lg-row">
              <img src={map} alt="map" width="500" />
              <div className="d-flex justify-content-center flex-column flex-sm-row flex-md-row flex-lg-column gap-3">
                <div class="address">
                  <h3 className="text-center text-lg-start">Address</h3>
                  <p className="text-center text-lg-start">Jl. Arnold Mononutu, Airmadidi</p>
                </div>
                <div class="contact">
                  <h3 className="text-center text-lg-start">Contact</h3>
                  <p className="text-center text-lg-start">0824252525252</p>
                </div>
                <div class="email">
                  <h3 className="text-center text-lg-start">Email</h3>
                  <p className="text-center text-lg-start">unkonown@gmail.com</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Contact;

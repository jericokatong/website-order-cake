import "./styles.css";
import cakeJumbotron from "../images/cake-hero.png";
import { Button, Row, Col } from "react-bootstrap";

const Jumbotron = () => {
  return (
    <section id="home">
      <div className="jumbotron container-fluid">
        <div className="container">
          <div className="row d-flex justify-content-center align-item-center">
            <Row className="justify-content-center align-item-center">
              <Col className="d-flex justify-content-center flex-column align-item-center mt-5 mb-5 tengah" md={5}>
                <h1 className="display-4 title-jumbotron">Bakery Store</h1>
                <p className="lead fs-3 subtitle-jumbotron">"Turn the cake into art."</p>
                <Button className="text-white button-jumbotron center" role="button">
                  Choose a cake
                </Button>
              </Col>

              <Col className="d-flex justify-content-center align-item-center mt-5 mb-5 tengah" md={5}>
                <img src={cakeJumbotron} alt="hero-cake" width="75%" className="hero-img" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;

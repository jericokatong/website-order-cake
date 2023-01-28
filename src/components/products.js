import "./styles.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import kue from "../images/kue.png";

const Products = () => {
  return (
    <section id="products" className="mt-5">
      <h2 className="text-center title-products">Products</h2>
      <Container fluid className="cardWrapping mt-4">
        <Container>
          <Row className="pt-5 pb-5">
            <Col sm="6" md="4" lg="3" className="d-flex justify-content-center mb-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={kue} />
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col>Cake</Col>
                      <Col className="d-flex justify-content-end">Rp. 1000</Col>
                    </Row>
                  </Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" md="4" lg="3" className="d-flex justify-content-center mb-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={kue} />
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col>Cake</Col>
                      <Col className="d-flex justify-content-end">Rp. 1000</Col>
                    </Row>
                  </Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" md="4" lg="3" className="d-flex justify-content-center mb-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={kue} />
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col>Cake</Col>
                      <Col className="d-flex justify-content-end">Rp. 1000</Col>
                    </Row>
                  </Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" md="4" lg="3" className="d-flex justify-content-center mb-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={kue} />
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col>Cake</Col>
                      <Col className="d-flex justify-content-end">Rp. 1000</Col>
                    </Row>
                  </Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" md="4" lg="3" className="d-flex justify-content-center mb-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={kue} />
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col>Cake</Col>
                      <Col className="d-flex justify-content-end">Rp. 1000</Col>
                    </Row>
                  </Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" md="4" lg="3" className="d-flex justify-content-center mb-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={kue} />
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col>Cake</Col>
                      <Col className="d-flex justify-content-end">Rp. 1000</Col>
                    </Row>
                  </Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Products;

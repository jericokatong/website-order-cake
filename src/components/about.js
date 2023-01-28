import react from "react";
import { Row, Col, Container } from "react-bootstrap";
import profilPicture from "../images/image-10.png";
import "./styles.css";

const About = () => {
  return (
    <section id="about" className="mt-5">
      <h2 className="title-about">About</h2>
      <div className="container-fluid container-about">
        <Container className="">
          <Row className="mt-4 gap-4 flex-xm-column flex-sm-column flex-md-column flex-column flex-lg-row">
            <Col xs={{ order: 2 }} lg={{ order: 1 }} className="p-lg-5 pt-md-5 pt-4 description-about d-flex justify-content-center flex-column">
              <h4>How we work</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat consectetur a ut explicabo quidem, molestiae aut quia iusto eum natus aperiam blanditiis autem nulla tempore amet soluta molestias similique.</p>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis provident expedita libero facere unde dolore labore itaque dolorum</p>
            </Col>
            <Col xs={{ order: 1 }} lg={{ order: 2 }} className="p-lg-5 pt-md-5 pt-4 picture-about d-flex justify-content-center align-items-center">
              <img src={profilPicture} alt="foto-profil" width="350" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default About;

import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import testi1 from "../assets/img/testi-1.PNG";
import testi2 from "../assets/img/testi-2.PNG";

const Testimonial = () => {
  return (
    <Container>
      <Row>
        <Col id="testimonial">
          <div className="testimoni">
            <h1 className="testimoni-1">Testimonial</h1>
            <h4 className="testimoni-2">Berbagai review positif dari para pelanggan kami</h4>
          </div>
        </Col>
      </Row>
      <div className="testimonial">
        <Carousel>
          <Carousel.Item>
            <Image className="testi1" src={testi1} alt="img"></Image>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="testi2" src={testi2} alt="img"></Image>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="testi1" src={testi1} alt="img"></Image>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};

export default Testimonial;

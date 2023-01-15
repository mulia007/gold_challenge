import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <Container id="faq">
      <div className="container-faq col-lg-6">
        <h1 className="faq-1">Frequently Asked Question</h1>
        <h4 className="faq-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
      </div>
      <Accordion className="faq col-lg-6">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
          <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
          <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
          <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Bagaimana jika terjadi kecelakaan?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Faq;

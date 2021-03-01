import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './App.css';
import Club from './components/Club/Club';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    //using bootstrap --doc from https://react-bootstrap.github.io/
    <Container fluid>
      <Row>
        <Col><Header></Header></Col>
      </Row>
      <Row>
        <Col><Club></Club></Col>
      </Row>
      <Row>
        <Col><Footer></Footer></Col>
      </Row>
    </Container>
  );
}

export default App;

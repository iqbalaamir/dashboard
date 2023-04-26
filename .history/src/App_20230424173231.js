import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Sidebar from "./components/Sidebar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container>
    <Row>
      <Col>  <Sidebar /></Col>
      <Col><NavbarComponent /></Col>
    </Row>
    {/* <Row>
      <Col>1 of 3</Col>
      <Col xs={5}>2 of 3 (wider)</Col>
      <Col>3 of 3</Col>
    </Row> */}
  </Container>
  );
}

export default App;

import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Sidebar from "./components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container>
      <Row>
      <Col sm={4}>  <Sidebar /></Col>
        <Col sm={8}> <NavbarComponent /></Col>
        
      
      </Row>
    </Container>
  );
}

export default App;

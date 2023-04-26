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
        <Col xs={12} md={8}>
          xs=12 md=8
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
</Container>
  );
}

export default App;

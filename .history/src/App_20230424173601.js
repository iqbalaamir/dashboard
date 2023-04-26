import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Sidebar from "./components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
   <div style={{flex:1,flexDirection:"column"}}>
    <Sidebar/>
    
   </div>
  );
}

export default App;

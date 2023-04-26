import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Sidebar from "./components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Route,Routes} from "react-router-dom"
import Main from "./components/Main";
function App() {
  return (
   <Routes>
    <Route path="/" element={<Main />}/>
    <Route />
   </Routes>
  );
}

export default App;

import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Sidebar from "./components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Route,Routes} from "react-router-dom"
import Main from "./components/Main";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";

function App() {
  return (
   <Routes>
    <Route path="/" element={<Main />}/>
    <Route path="/item1" element={<Item1 />}/>
    <Route path="/item2" element={<Item2 />}/>
   </Routes>
  );
}

export default App;

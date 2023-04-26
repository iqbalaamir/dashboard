import { useState } from "react";
import "./App.css";
import Home from "./artifacts/Home";
import SidebarComponent from "./artifacts/SidebarComponent";

function App() {
  const [toggle,setToggle] = useState(true)
  const Toggle= ()=>{
    setToggle(!toggle)
  }
  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
       {toggle && <div className="col-2 bg-white min-vh-100">
          <SidebarComponent />
        </div>} 
        <div className="col" style={{ padding: 0 }}>
          <Home Toggle={Toggle}/>
        </div>
      </div>
    </div>
  );
}

export default App;

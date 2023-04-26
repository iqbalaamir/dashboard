import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
// import Home from "./artifacts/Home";
// import SidebarComponent from "./artifacts/SidebarComponent";

function App() {
  const [toggle,setToggle] = useState(true)
  const Toggle= ()=>{
    setToggle(!toggle)
  }
  return (
    // <div className="container-fluid bg-secondary min-vh-100">
    //   <div className="row">
    //    {toggle && <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
    //       <SidebarComponent />
    //     </div>} 
    //     {toggle && <div className="col-4 col-md-2">

    //     </div>}
    //     <div className="col" style={{ padding: 0 }}>
    //       <Home Toggle={Toggle}/>
    //     </div>
    //   </div>
    // </div>
    <div>
      <Sidebar/>
    </div>
  );
}

export default App;

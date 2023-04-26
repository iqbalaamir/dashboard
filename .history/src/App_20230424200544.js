import "./App.css";
import Home from "./artifacts/Home";
import SidebarComponent from "./artifacts/SidebarComponent";


function App() {
  return (
<div className="container-fluid bg-secondary min-vh-100">
<div className="row">
<div className="col-2 bg-white min-vh-100">
<SidebarComponent/>
</div>
<div className="col">
{/* <Home/> */}
</div>
</div>
</div>
  );
}

export default App;

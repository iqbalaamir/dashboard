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
<div className="col" style={{padding:0}}>
<Home/>
</div>
</div>
</div>
  );
}

export default App;

import "./App.css";
import SidebarComponent from "./artifacts/SidebarComponent";


function App() {
  return (
<div className="container-fluid bg-secondary min-vh-100">
<div className="row">
<div className="col-2 bg-white">
<SidebarComponent/>
</div>
<div className="col-auto">

</div>
</div>
</div>
  );
}

export default App;

import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="Row">
      <div className="col">
        <Sidebar />
      </div>
      <div className="col">
        <NavbarComponent />
      </div>
    </div>
  );
}

export default App;

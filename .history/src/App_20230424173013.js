
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Sidebar from './components/Sidebar';

function App() {
  return (
   <div className='flex'>
    <Sidebar/>
    <NavbarComponent/>
   </div>
  );
}

export default App;

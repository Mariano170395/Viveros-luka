import './App.css';
import Carrousel from './components/Carrousel';
import NavBar from './components/NavBar';
import Contacto from './components/Contacto';
import Resenas from './components/Resenas';
import Vision from './components/Vision';

function App() {
  return (
    <div>
      <NavBar/>
      <Carrousel/>
      <Vision/>
      <Contacto/>
      <Resenas/>
    </div>
  );
}

export default App;

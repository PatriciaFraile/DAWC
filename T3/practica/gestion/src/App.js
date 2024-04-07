import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import Agregar from './components/Agregar';
import Listado from './components/Listado';
import Buscador from './components/Buscador';

function App() {
  
  return (
    <div className="mb-3">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/home">Inicio</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/agregar">Agregar</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/buscar">Buscador</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <Routes>
    <Route path='/agregar' element={<Agregar/>}></Route>
    <Route path='*' element={<Listado/>}></Route>
    <Route path='/buscar' element={<Buscador/>}></Route>
  </Routes>
  </div>

  
   
  );
}

export default App;

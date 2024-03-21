import './App.css';
import {Routes,Route} from 'react-router-dom';
import Agregar from './components/Agregar';

function App() {
  
  return (
    <div className='App'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Agregar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Buscador</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Listado</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Routes>
    <Route path='/agregar' element={<Agregar/>}></Route>
    <Route></Route>
  </Routes>
  </div>
   
  );
}

export default App;

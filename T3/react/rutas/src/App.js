import "./App.css";
import { Routes, Route,Link} from "react-router-dom";
import ComponenteUno from "./components/ComponenteUno";
import ComponenteDos from "./components/ComponenteDos";
import ComponenteHome from "./components/ComponenteHome";

function App() {
  return (
    <div className="App">
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page"  to="/home">Componente Home</Link>
 
                   </li>
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page"  to="/compouno">Componente Uno</Link>
 
                   </li>
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page"  to="/compodos">Componente Dos</Link>

          </li>
        </ul>
      </div>
    </div>
     </nav>
      <Routes>
        <Route path="/compouno" element={<ComponenteUno/>}></Route>
        <Route path="/compodos" element={<ComponenteDos/>}></Route>
        <Route path="*" element={<ComponenteHome/>}></Route>
      </Routes>
    </div>
  
)
}

export default App;
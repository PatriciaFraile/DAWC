import "./App.css";


function App() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Inicio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Componente Home</a>

          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Componente Uno</a>
 
                   </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Componente Dos</a>

          </li>
        </ul>
      </div>
    </div>
  </nav>
)
}

export default App;
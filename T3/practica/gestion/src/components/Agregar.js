import React from "react";

const Agregar=()=>{
    
return(
    <div className="container">
    <div classNmae="p-4 mr-20">
    <center><h1>Agregar Proyecto</h1></center>
    <div className="mb-3">
        <label for="nombre" class="form-label">Nombre Proyecto</label>
        <input type="nombreProyecto" class="form-control" id="nombreProyectos"></input>
    </div>
    <div className="mb-3">
        <label for="nombre" class="form-label">Nombre Responsable</label>
        <input type="nombreResponsable" class="form-control" id="nombreResponsable"></input>
    </div>
    <div className="mb-3">
        <label for="correo" class="form-label">Correo Responsable</label>
        <input type="correoResponsable" class="form-control" id="correoResponsable"></input>
    </div>
    <div className="mb-3">
        <label for="presupuesto" class="form-label">Presupuesto</label>
        <input type="presupuesto" class="form-control" id="presupuesto"></input>
    </div>
    <div className="mb-3">
        <label for="tecnologias" class="form-label">Tecnologias</label>
        <select class="form-select" aria-label="Default select example">
            <option selected></option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
            <option value="python">Python</option>
            <option value="kotlin">Kotlin</option>
        </select>
    </div>
    <div className="mb-3">
        <label for="componentes" class="form-label">Componentes</label>
        <input type="nombreComponente" class="form-control" id="nombreComponente"></input>
    </div>

   
  
    </div>
    </div>

 
    

);
}
export default Agregar;
import React, { useState } from "react";

const Buscador = ({listado})=>{
    return(
        <div>
            <div className="mb-3">
                <input type="nombreProyecto" class="form-control" id="nombreProyectos"placeholder = "filtrar por nombre"/>
            </div>
            <div className="mb-3">
                <input type="nombreResponsable" class="form-control" id="nombreresponsable"placeholder = "filtrar por responsable"/>
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
        </div>
      
    );
}
export default Buscador
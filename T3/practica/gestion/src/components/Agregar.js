import React, { useState } from "react";
import Swal from "sweetalert2";

const Agregar=()=>{
    
    const [itemComp, setItemCom] = useState([])
    const[compValue,setCompValue] = useState('')


    function agregarComponente(){
        if (compValue.trim() !== '') {
            setItemCom([...itemComp, compValue]);
            setCompValue('');
          }

    }

    
return(
    <div className="container">
    <div classNmae="p-4 mr-20">
    <center><h1>Agregar Proyecto</h1></center>
    <div className="mb-3">
        <label for="nombre" class="form-label">Nombre Proyecto</label>
        <input type="nombreProyecto" class="form-control" id="nombreProyectos"/>
    </div>
    <div className="mb-3">
        <label for="nombre" class="form-label">Nombre Responsable</label>
        <input type="nombreResponsable" class="form-control" id="nombreResponsable"/>
    </div>
    <div className="mb-3">
        <label for="correo" class="form-label">Correo Responsable</label>
        <input type="email" class="form-control" id="correoResponsable"/>
    </div>
    <div className="mb-3">
        <label for="presupuesto" class="form-label">Presupuesto</label>
        <input type="number" class="form-control" id="presupuesto"/>
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
        <input type="nombreComponente" class="form-control" id="nombreComponente"
       value={compValue} 
       onChange={(e)=>setCompValue(e.target.value)}
        />

        
    </div>
    <button type="button" class="btn btn-primary" style={{margin:10}} onClick={agregarComponente}> Agregar Componente</button>
    <button type="button" class="btn btn-primary"style={{margin:10}}>Validar equipo</button>
    <button type="button" class="btn btn-primary">Quitar componentes</button>
    <div>
        <ul>
            {itemComp.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
    <label class="form-check-label" for="flexCheckChecked">
        Proyecto core
    </label>
    </div>
    <button type="button" class="btn btn-primary mt-3">Agregar Proyecto</button>

    </div>
    </div>

 
    

);
}
export default Agregar;
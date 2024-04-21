import React, { useState } from "react";
import Swal from "sweetalert2";
import Buscador from "./Buscador"

const Agregar=({listado,modificacion})=>{
    
    const [itemComp, setItemCom] = useState([])
    const [itemProy, setItemProy] = useState({})
    const[proy,setProy]= useState([])
    const[compValue,setCompValue] = useState('')
    const [accesorios, setAccesorios] = useState([]);
    const [accesorio, setAccesorio] = useState("");

    let eventHandle = (e) => {
        setItemProy((e1) => {
          return { ...e1, [e.target.id]: e.target.value };
        });
      };
    function agregarComponente(){
        if (compValue.trim() !== '') {
            setItemCom([...itemComp, compValue]);
            setCompValue('');
          }

    }

    function borrarComponente(){
            setItemCom([]);
    }

    function agregarProyecto() {
        let proyectoBuscado = listado.find((item) => {
          return item.nombreProyectos == itemProy.nombreProyectos;
        });
    
        if (proyectoBuscado == null) {
          setItemProy((e) => {
            return { ...e, itemComp: itemComp,accesorios: accesorios };
          });
          modificacion((e) => {
            return [...e, itemProy];
          });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Proyecto agregado corretamente",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Proyecto duplicado",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(listado);
      }

    
return(
<div className="row  p-5 mt-3">
<center><h1>Agregar Proyecto</h1></center>
<h2>El numero de proyectos es de :<span>0</span></h2>
    <div className="col">
    <div className="mb-3">
        <label for="nombre" class="form-label">Nombre Proyecto</label>
        <input type="nombreProyecto" class="form-control" id="nombreProyectos"onKeyUp={(e) => {
            eventHandle(e);
          }}/>
    </div>
    <div className="mb-3">
        <label for="nombre" class="form-label">Nombre Responsable</label>
        <input type="nombreResponsable" class="form-control" id="nombreResponsable"onKeyUp={(e) => {
            eventHandle(e);
          }}/>
    </div>
    <div className="mb-3">
        <label for="correo" class="form-label">Correo Responsable</label>
        <input type="email" class="form-control" id="correoResponsable"onKeyUp={(e) => {
            eventHandle(e);
          }}/>
    </div>
    <div className="mb-3">
        <label for="presupuesto" class="form-label">Presupuesto</label>
        <input type="number" class="form-control" id="presupuesto"onKeyUp={(e) => {
            eventHandle(e);
          }}/>
    </div>
    <div className="mb-3">
        <label for="tecnologias" class="form-label">Tecnologias</label>
        <select class="form-select" aria-label="Default select example" onChange={(e) => {
            setAccesorio(e.target.value);
          }}>
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
    <button type="button" class="btn btn-primary" onClick={borrarComponente}>Quitar componentes</button>
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
    <button type="button" class="btn btn-primary mt-3"onClick={(e) => {
            agregarProyecto();
          }}>Agregar Proyecto</button>

    </div>
    <div className="col">
        <Buscador/>    
    </div>
    </div>
);
}
export default Agregar;
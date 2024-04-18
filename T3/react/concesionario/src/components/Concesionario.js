import React, {useState} from "react";
import Agregar from "./Agregar";
import Listar from "./Listar"
import Buscador from "./Buscador";
import Swal from "sweetalert2";



const Concesionario = ()=>{
    
    const [precioBusqueda, setPrecioBusqueda] = useState(0);
    const [coche, setCoche] = useState({});
    const [coches, setCoches] = useState([]);
    const [cochesFiltrados, setCochesFiltrados] = useState([]);
    const [accesorios, setAccesorios] = useState([]);
    const [accesorio, setAccesorio] = useState("");
  
    
  
    return(
        <div className="container">
            <div className="row mt-4">
                <div className="col">
                    <Agregar listado={coches} modificacion={setCoches}/>
                </div>
                <div className="col">
                    <Buscador listado={coches}/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <Listar listado={coches}/>
                </div>
            </div>
        </div>
    );
  }

export default Concesionario;
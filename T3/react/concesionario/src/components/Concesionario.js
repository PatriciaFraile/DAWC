import React, {useState} from "react";
import Agregar from "./Agregar";
import Listar from "./Listar"
import Swal from "sweetalert2"


const Concesionario = ()=>{
    const [coche,setCoche] = useState({})
    const [coches,setCoches] = useState([])
    const [accesorios, setAccesorios] = useState([]);

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Agregar listado={coches}/>
                </div>
                <div className="col">
                    <Listar listado={coches}/>
                </div>
            </div>
        </div>
    );
}
export default Concesionario;
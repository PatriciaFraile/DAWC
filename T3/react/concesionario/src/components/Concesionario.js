import React, {useState} from "react";
import Agregar from "./Agregar";
import Swal from "sweetalert2"
import Buscador from "./Buscador";
import Listar from "./Listar";


const Concesionario = ()=>{
    const [coche,setCoche] = useState({})
    const [coches,setCoches] = useState([])
    const [accesorios, setAccesorios] = useState([]);


    let eventHandler=(e)=>{
        setCoche((e1)=>{
            return {...e1,[e.target.id]:e.target.value}
        })
    }
    function agregarCoche() {
        /*Mirar que no haya una matricula igual */
        /*coches = [coche,coche...] */

        let buscador = coches.find((item)=>{
            return item.matricula==coche.matricula
        });
        if (buscador==null){
           setCoche((e)=>{
                return{...e,accesorios:accesorios}
            });
            setCoches((e)=>{
                return{...e,coche}
            })
            Swal.fire({
                position:"center",
                icon:"success",
                title:"coche agregado",
                showConfirmButton:false,
                timer:1500,
            });
        }else{
            Swal.fire({
                position:"center",
                icon:"error",
                title:"No se ha añadido el coche",
                showConfirmButton:false,
                timer:1500,
            })
        }
        
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Agregar listado={coches}/>
                </div>
            </div>
        </div>
    );
}
export default Concesionario;
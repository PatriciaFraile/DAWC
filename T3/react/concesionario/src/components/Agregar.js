import React, {useState} from "react";
import Swal from "sweetalert2";

const Agregar =({listado})=>{
    
    const [coche,setCoche]= useState({})
    const [coches,setCoches] = useState([])
    const [accesorio, setAccesorio] = useState("")
    const [accesorios, setAccesorios] = useState([]);

    function agregarCoche(){
        let buscador = listado.find((e)=>{
            return e.matricula==coche.matricula;
        })
        if(buscador==null){
            setCoche((e)=>{
                return{...e,accesorios:accesorios}
            })
            setCoches((e)=>{
                return{...e,coche}
            })
            Swal.fire({
                position:"center",
                icon:"success",
                title:"coche agregado",
                timer:1500

            })
        }else{
            Swal.fire({
                position:"center",
                icon:"error",
                title:"Error al añadir coche",
                timer:1500
            })
        }
    }


    let eventHandler= (e)=>{
        setCoche((e1)=>{
            return {...e1,[e.target.id]:e.target.value}
        })
    }

    return(
        <div>
            <input type="text" class="form-control" placeholder="Matricula" onKeyUp={(e)=>{
                eventHandler(e)
            }} />
            <input type="text" class="form-control" placeholder="Modelo" onKeyUp={(e)=>{
                eventHandler(e)
            }}/>
            <input type="text" class="form-control" placeholder="Precio" onKeyUp={(e)=>{
                eventHandler(e)
            }} />

            <select class="form-select" aria-label="Default select example" onChange={(e)=>{
                setAccesorio(e.target.value)
            }}>
                <option>Camara</option>
                <option>Techo</option>
                <option>Paquete sport</option>
            </select>


        </div>

    );
}
export default Agregar;
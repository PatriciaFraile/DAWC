import React, {useState} from "react";
import Swal from "sweetalert2";

const Agregar =({listado})=>{
    
    const [coche,setCoche]= useState({})
    const [coches,setCoches] = useState([])
    const [accesorio, setAccesorio] = useState("")
    const [accesorios, setAccesorios] = useState([]);

    let eventHandler= (e)=>{
        setCoche((e1)=>{
            return {...e1,[e.target.id]:e.target.value}
        })
    }

    function agregarCoche(){
        console.log(listado.length);
        let buscador = coches.find((e)=>{
            return e.matricula==coche.matricula;
        })
        if(buscador==null){
            setCoche((e)=>{
                return{...e,accesorios:accesorios}
            })
            setCoches((e)=>{
                return[...e,coche]
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
            <button type="button" class="btn btn-primary"
            onClick={(e)=>{
                let elemento = accesorios.find((item)=>{
                    return item==accesorio;
                });
                if (elemento==null) {
                    setAccesorios((item)=>{
                        return[...item,accesorio]
                    });
                    Swal.fire({
                        position:"center",
                        icon:"success",
                        title:"Accesorio agregado",
                        timer:1500
        
                    })
                }else{
                    Swal.fire({
                        position:"center",
                        icon:"error",
                        title:"Error al añadir accesorio",
                        timer:1500
                    })
                }
        }}>Agregar</button>
        <p>El numero de accesorios es : {accesorios.length}</p>

        <button type="button" class="btn btn-secondary" onClick={(e)=>{agregarCoche()}}>Agregsr Coche</button>



        </div>

    );
}
export default Agregar;
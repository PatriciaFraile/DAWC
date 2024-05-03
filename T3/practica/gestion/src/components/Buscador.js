import React, { useState } from "react";

const Buscador = ({listado})=>{
    const[buscar,setBuscar] = useState('')
    const[resultado,setResultado] = useState([])

    let eventHandle=(e)=>{
        setBuscar(e.target.value)
    }
    const handleSearch = () => {
        const resultadoNombre = listado.filter((item) =>
          item.nombreProyectos.includes(buscar)
        );
        setResultado(resultadoNombre)
      };

    return(
        <div className="p-5 mt-3">
            <div className="mb-3">
                <input type="nombreProyecto" class="form-control" id="nombreProyectos"placeholder = "filtrar por nombre"
                onKeyUp={(e) => {
                    eventHandle(e)}}/>
            </div>
    <button type="button" class="btn btn-primary" onClick={handleSearch}>Buscar</button>
    {resultado.map((item,index)=>{
         return (
            <div key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.nombreProyectos}</h5>
                  <p className="card-text">{item.nombreResponsable}</p>
                 
  

                </div>
              </div>
            </div>
          );
    })}
        </div>
      
    );
}
export default Buscador
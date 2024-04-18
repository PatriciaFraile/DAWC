import React from "react";

const Listar=({listado})=>{

  return (
    <div>
      <div className="row">
        {listado.map((item, index) => {
          return (
            <div className="col" id={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.nombreProyectos}</h5>
                  <h6 className="card-title">{item.nombreResponsable}</h6>
                  <p className="card-title">{item.correoResponsable}</p>
                  <p className="card-title">{item.presupuesto}</p>
                  


                  <a href="#" className="btn btn-primary">
                    Ver detalles
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

  
  
export default Listar;
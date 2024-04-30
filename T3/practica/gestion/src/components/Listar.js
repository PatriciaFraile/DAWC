import React from "react";

const Listar=({listado})=>{

  return (
    <div>
      <div className="container">
        {listado.map((item, index) => {
          return (
            <div id={index}>
              <table>
              <thead className="column">
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Responsable</th>
                </tr>
              </thead>
              <tbody className="column">
                <tr>
                  <td>{index+1}</td>
                  <td>{item.nombreProyectos}</td>
                  <td>{item.nombreResponsable}</td>
                </tr>
              </tbody>

              </table>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

  
  
export default Listar;
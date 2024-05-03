import React from "react";

const Listar=({listado})=>{

  return (
    <center>
<table className="mt-5"> 
      <thead>
        <tr>
          <th>Id</th>
          <th>Proyecto</th>
          <th>Responsable</th>
        </tr>
      </thead>
      <tbody>
      {listado.map((item, index) => {
        return(
                <tr key={index}>
                 <td>{index+1}</td>
                 <td>{item.nombreProyectos}</td>
                 <td>{item.nombreResponsable}</td>
               </tr>
        )
        
               
       })}
      </tbody>
    </table>
    </center>
    
  );
}

  
  
export default Listar;
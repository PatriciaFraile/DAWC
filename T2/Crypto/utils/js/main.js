let fila = document.querySelector(".col-8 .row");
let boton = document.querySelector("button");
let select = document.querySelector("select");

boton.addEventListener("click", (e) => {
  resetearLista();
  pintarDatos(select.value);
  mostrar(select.value);

});

async function getUsers(genero) {

   
  console.log(`https://randomuser.me/api/?results=50&gender=${genero}`);

  let resultadoJSON = await fetch(
    `https://randomuser.me/api/?results=50&gender=${genero}`
  );
  let resultado = await resultadoJSON.json();
  return resultado;
}

function pintarDatos(genero) {
  getUsers(genero).then((data) => {
    data.results.forEach((element) => {
      fila.innerHTML += `<div class="col">
        <div class="card" style="width: 18rem">
          <img src="${element.picture.medium}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${element.name.first} ${element.name.last}</h5>
            <p class="card-text">${element.email}</p>
            <a href="#" class="btn btn-primary">Ver detalle</a>
          </div>
        </div>
      </div>`;
      let boton = document.querySelector(".btn btn-primary");
      boton.addEventListener('click',(e)=>{
        getUsers(genero).then((data)=>{
          data.results.forEach((element)=>{
            console.log(element.name.first);
          })
        })
    
      })
    });
  });
}
function mostrar(genero){
  
  
}



function resetearLista() {
  fila.innerHTML = "";
}
let fila = document.querySelector(".col-8 .row");
let boton = document.querySelector("button");
let select = document.querySelector("select");
let fila2 = document.querySelector("#colum #fila #linea")

boton.addEventListener("click", (e) => {
  resetearLista();
  pintarDatos(select.value);

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
          <div class="card-body" id="carta">
            <h5 class="card-title">${element.name.first} ${element.name.last}</h5>
            <p class="card-text">${element.email}</p>
            <a href="#" class="btn btn-primary" id="boton">Ver detalle</a>
          </div>
        </div>
      </div>`;
      let boton2 = document.querySelector("#boton")
      let carta = document.querySelector("#carta")

  boton2.addEventListener("click",()=>{
    let carta2 = carta.textContent
    let array = [carta2]
    mostrarDatos(array)
  })
      
    });
})
}
function mostrarDatos(info){
  info.forEach((e)=>{
    fila2.textContent += e
    console.log(e);
  })

  
}



function resetearLista() {
  fila.innerHTML = "";
}
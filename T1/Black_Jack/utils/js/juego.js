
crearBaraja();
let boton_pedir = document.querySelector("#pedir_carta");
let nombre_jugador = document.querySelector("p#nombre_jugador span");
let cartas_jugador = document.querySelector("#cartas_jugador");
let puntos_jugador = document.querySelector("p#puntos_jugador span");
let puntos_banca = document.querySelector("p#puntos_banca span");
let cartas_banca = document.querySelector("#cartas_banca");
let reiniciar_partida = document.querySelector("#reiniciar");
let plantarse = document.querySelector("#plantarse");
let guardar_datos = document.querySelector("#guardar_datos");
let borrar_datos = document.querySelector("#borrar_datos");
let partida_ganada = document.querySelector("p#partidas span")
let partida_banca = document.querySelector("p#partidas_banca span")


borrar_datos.disabled = false;

window.addEventListener('load',()=>{
    let nombre_recu = localStorage.getItem("jugador");
    nombre_jugador.textContent = nombre_recu;
    let partida_recu = localStorage.getItem("ganadas");
    partida_ganada.textContent = partida_recu;
    let ganadas_recu = localStorage.getItem("ganadas_banca");
    partida_banca.textContent = ganadas_recu
    boton_pedir.disabled = false;

    let length = localStorage.length;
    console.log(localStorage.length);
  if(length === 0){
    let nombre = prompt("Escribe tu nombre");
    nombre_jugador.textContent = nombre;
    boton_pedir.disabled = false;
    console.log(nombre_jugador.textContent);
    partida_ganada.textContent = Number(0)
    partida_banca.textContent = Number(0);
  }
  })


boton_pedir.addEventListener("click", (e)=>{
    plantarse.disabled = false;
    reiniciar_partida.disabled = false;
    plantarse.disabled = false;

    let carta = baraja.pop();
    let nodoImagen = document.createElement("img");
    nodoImagen.src = `./utils/images/${carta.imagen}`;
    nodoImagen.style="width: 5%";
    cartas_jugador.appendChild(nodoImagen);
    puntos_jugador.textContent = Number(puntos_jugador.textContent) + carta.calcularValor();

    if(puntos_jugador.textContent>21){
      alert(`Ha ganado la Banca`)
      partida_banca.textContent = Number(partida_banca.textContent)+1;
      boton_pedir.disabled = true;
      plantarse.disabled = true;
      guardar_datos.disabled = false;


    }
    let ganador = Number(puntos_jugador.textContent)
    if (ganador === 21){
      alert(nombre_jugador.textContent + " ganador ");  
      partida_ganada.textContent = Number(partida_ganada.textContent)+1;
      guardar_datos.disabled = false;
      boton_pedir.disabled = true;
      plantarse.disabled = true;

              
    }
});
 
reiniciar_partida.addEventListener("click", (e)=>{
    puntos_jugador.textContent = 0;
    puntos_banca.textContent = 0;
    cartas_jugador.innerHTML = "";
    cartas_banca.innerHTML = "";
    boton_pedir.disabled = false;
    guardar_datos.disabled = true;



});

plantarse.addEventListener("click",()=>{
    turnoBanca();
    boton_pedir.disabled = true;
    plantarse.disabled = true;

});
 


borrar_datos.addEventListener("click",()=>{
  localStorage.clear();
})

guardar_datos.addEventListener("click",()=>{
  localStorage.setItem("jugador",nombre_jugador.textContent);
  localStorage.setItem("ganadas", Number(partida_ganada.textContent));
  localStorage.setItem("ganadas_banca",Number(partida_banca.textContent));
  alert('Se han guardado los datos')

});


function turnoBanca() {
    let miFuncion = () =>{
        alert("Turno de la banca");
    };
    miFuncion();
    let intervaloBanca = setInterval(()=>{
        let carta = baraja.pop();
        let nodoImagen = document.createElement("img");
        nodoImagen.src = `./utils/images/${carta.imagen}`;
        nodoImagen.style="width: 5%";
        cartas_banca.appendChild(nodoImagen)
        puntos_banca.textContent = Number(puntos_banca.textContent) + carta.calcularValor();
        setTimeout(() => {
            if (puntos_banca.textContent >= 17 && puntos_banca.textContent<=21) {
              clearInterval(intervaloBanca);
      
              if (puntos_jugador.textContent > puntos_banca.textContent) {
                alert(nombre_jugador.textContent + " ganador ");                
                guardar_datos.disabled = false;


                partida_ganada.textContent = Number(partida_ganada.textContent)+1;
              } else if (puntos_banca.textContent > puntos_jugador.textContent) {
                alert("Banca ganadora");              
                guardar_datos.disabled = false;
                partida_banca.textContent = Number(partida_banca.textContent)+1;



              } else {
                alert("Empate");
                guardar_datos.disabled = false;

              }
            }else if (puntos_banca.textContent>21){
              clearInterval(intervaloBanca);
              alert(nombre_jugador.textContent + " ganador ");
              partida_ganada.textContent = Number(partida_ganada.textContent)+1;
              guardar_datos.disabled = false;

            }
          }, 500);
        }, 1500);

    
}



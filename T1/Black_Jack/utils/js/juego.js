crearBaraja();
let boton_pedir = document.querySelector("#pedir_carta");
let nombre_jugador = document.querySelector("p#nombre_jugador span");
let cartas_jugador = document.querySelector("#cartas_jugador");
let puntos_jugador = document.querySelector("p#puntos_jugador span");
let puntos_banca = document.querySelector("p#puntos_banca span");
let cartas_banca = document.querySelector("#cartas_banca");
let reiniciar_partida = document.querySelector("#reiniciar");
let plantarse = document.querySelector("#plantarse");

let nombre = prompt("Escribe tu nombre");

if(nombre.textContent == null){
  let nombre = prompt("Escribe tu nombre");
  nombre_jugador.textContent = nombre
  boton_pedir.disabled = false;

}

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
      boton_pedir.disabled = true;
    plantarse.disabled = true;
    }
});
 
reiniciar_partida.addEventListener("click", (e)=>{
    puntos_jugador.textContent = 0;
    puntos_banca = 0;
    cartas_jugador.innerHTML = "";
    cartas_banca.innerHTML = "";

});

plantarse.addEventListener("click",()=>{
    turnoBanca();

})
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
            if (puntos_banca >= 17 && puntos_banca<=21) {
              clearInterval(intervaloBanca);
      
              if (puntos_jugador > puntos_banca) {
                alert(`${nombre_jugador} ganador`);
              } else if (puntos_banca > puntos_jugador) {
                alert("Banca ganadora");
              } else {
                alert("Empate");
              }
            }else if (puntos_banca>21){
              clearInterval(intervaloBanca);
              alert(`${nombre_jugador} ganador`);
            }
          }, 500);
        }, 1500);

    
}



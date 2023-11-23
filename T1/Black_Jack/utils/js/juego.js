window.location.hash="no-back-button";
window.location.hash="Again-No-back-button";//esta linea es necesaria para chrome
window.onhashchange=function(){window.location.hash="no-back-button";}
let nombre = prompt("Escribe tu nombre");
crearBaraja();
let boton_pedir = document.querySelector("#pedir_carta");
let nombre_jugador = document.querySelector("p#nombre_jugador span");
let cartas_jugador = document.querySelector("#cartas_jugador");
let puntos_jugador = document.querySelector("p#puntos_jugador span");
let reiniciar_partida = document.querySelector("#reiniciar")

nombre_jugador.textContent = nombre

boton_pedir.addEventListener("click", (e)=>{
    let carta = baraja.pop();
    let nodoImagen = document.createElement("img");
    nodoImagen.src = `./utils/images/${carta.imagen}`;
    nodoImagen.style="width: 5%";
    cartas_jugador.appendChild(nodoImagen);
    puntos_jugador.textContent = Number(puntos_jugador.textContent) + carta.calcularValor();
});
 
reiniciar_partida.addEventListener("click", (e)=>{
    puntos_jugador.textContent = 0

})
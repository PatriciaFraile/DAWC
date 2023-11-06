let barsa = new equipo("FC Barcelona",[],10000);
let madrid = new equipo("Real Madrid",[],10000);
let miami = new equipo("Inter Miami",[],10000);
let liga = [barsa , madrid,miami];
barsa.ficharJugador(new jugador("Gavi","Centrocampista",500));
madrid.ficharJugador(new jugador("Modric","Defensa", 1000))
miami.ficharJugador(new jugador("Lionel Messi","Delantero",4000))
barsa.ficharJugador(new jugador("Pedri","CentroCampista",1000));

/*liga.forEach((element)=>{
    element.getjugadorCaro();
})*/
barsa.mostrarDatos();
madrid.mostrarDatos();
miami.mostrarDatos()

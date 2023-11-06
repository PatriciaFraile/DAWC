class equipo{
    nombre;
    plantilla = [];
    presupuesto;
    constructor(nombre1,plantilla1,presupuesto1){
        this.nombre = nombre1;
        this.plantilla = plantilla1;
        this.presupuesto = presupuesto1;
    }
    get getjugadorCaro(){
        let valorJugadorCaro = 0;
        let jugadorCaro = new jugador("","",0)
        this.plantilla.forEach((item)=>{
            if (item.valor>valorJugadorCaro) {
                jugadorCaro = item;
                
            }
        });
        console.log(`El jugador caro es : ${jugadorCaro.nombre}`);

    }
    mostrarDatos(){
        console.log(`Nombre : ${this.nombre}`);
        console.log(`Los jugadores de la plantilla son : ${this.plantilla.length}`);
        console.log(`Presupuesto : ${this.presupuesto}`);
    }

    ficharJugador(jugador ) {
        if (jugador.valor>this.presupuesto) {
            console.log("No tienes fondos");
            
        } else {
            this.plantilla.push(jugador)  

        }
    }
    listarJugadores(){
        this.plantilla.forEach((item)=>{
            item.mostrarDatos();
        })
    }
}
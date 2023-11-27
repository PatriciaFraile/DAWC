let baraja = []
function crearBaraja() {
    let palos = ["T", "C", "D", "P"];
    for (let index = 0; index < palos.length; index++) {
        for (let j = 1; j < 14; j++) {
            let cartas = j;
            switch (cartas) {
                case 11:
                    cartas = "J";
                    break;
                case 12:
                    cartas = "Q";
                    break;
                case 13 :
                    cartas = "K";
                    break;
            }
            baraja.push(new carta(cartas+palos[index]))
        }
        
    }
    baraja = _.shuffle(baraja)
    
}
function mostrarBaraja() {
    setInterval(() => {
        let carta = baraja.pop()
        carta.mostrarDatos()
    }, 2000);
}   

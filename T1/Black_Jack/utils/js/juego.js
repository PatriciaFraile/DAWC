let palo = ["C","D","T","P"];
let baraja = []
for (let index = 0; index < palo.length; index++) {
    for (let j = 1; index < 14 ; j++) {
        let cambio = j;
        switch (cambio) {
            case 11:
                cambio = "J";
                break;
            case 12 : 
                cambio = "Q";
                 break;
            case 13:
                 cambio = "K"
                break;
        }
        baraja.push(new Carta(cambio+palo[index]))  
    }
    baraja = _.shuffle(baraja);
}
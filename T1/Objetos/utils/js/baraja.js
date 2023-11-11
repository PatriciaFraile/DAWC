let baraja = [];
function iniciarBaraja() {
    let palos = ["T", "C", "D", "P"];
    for (let index = 0; index < palos.length; index++) {
        for (let j = 1; j < 14; j++) {
            let cartas = j;
            switch (cartas) {
                case 1:
                    cartas = "A";
                    break;
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
            baraja.push(new carta(cartas+palos[index],j))
        }
        
    }
    
    
}
function mostrarBaraja() {
    baraja.forEach((element)=>{
        console.log(element);
    })
}   
iniciarBaraja();
mostrarBaraja();
let button5 = document.getElementById("five")
button5.addEventListener("click",function () {
    let palo = ["C","D","R","P"];
    let baraja = []
    for (let index = 0; index < palo.length; index++) {
        for (let j = 1; j < 14; j++) {
           //carta.push(j+palo[index])
           let cartas = j;
           switch (cartas) {
            case 1:
                cartas = "A"
                break;
            case 11:
                cartas = "J"
                break; 
            case 12:
                cartas = "Q"
                break;
            case 13:
                cartas="K"
                break;
           }
           baraja.push(cartas+palo[index]);
        }
    }
    baraja = _.shuffle(baraja)
    setInterval(() => {
        let num = baraja.pop()
        let palos = num.substring(num.length-1)
        let valor = num.substring(0,num.length-1)
        console.log(`Carta ${num}`)
        console.log(`Palo ${palos}`)
        console.log(`Valor ${valor}`)
    }, 2000);
  
    


})
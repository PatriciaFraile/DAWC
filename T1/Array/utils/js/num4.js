let button4 = document.getElementById("for")
button4.addEventListener("click",function () {
    let palo = ["C","D","R","P"];
    let carta = []
    for (let index = 0; index < palo.length; index++) {
        for (let j = 1; j < 13; j++) {
           carta.push(j+palo[index])
        }
    }
    for (let i = 0; i < carta.length; i++) {
        switch (i) {
            case i.valueOf(10):
                carta[i]=="J"//no sale
                break;
        }
    }
    console.log(carta);


})
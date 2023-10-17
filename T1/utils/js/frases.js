let button6 = document.getElementById("six");
button6.addEventListener("click",function () {
    while (true) {
        let frase = prompt("Escribe una frase");
        let final = frase.split(" ").join("");
        if(final.length>10){
            console.log("Hola");//no esta terminado
        }else{
            break;
        }
        
    }
})
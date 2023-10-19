let button6 = document.getElementById("six");
button6.addEventListener("click",function () {
    while (true) {
        let frase = prompt("Escribe una frase");
        let final = frase.split(" ").join("");
        if(final.length>10){
            let texto = frase.split(" ")
            let numPalabra = texto.length
            alert(`El dato introducido tiene:\t
            ${final.length} letras,\t
            ${numPalabra} palabras.
            `);
            break;
        }else{
            break;
        }
        
    }
})
let button1 = document.getElementById("one");
button1.addEventListener("click", function(){
    let numeros = [1,2,3,4,5,6,7,8,9,10];
    console.log("Con While")
    while (numeros.length>0) {
        console.log(numeros);
        break;
        
    }
    console.log("Con for");
    for (let index = 0; index < numeros.length; index++) {
        console.log(numeros[index]);

    };
    console.log("Con forEach");
    numeros.forEach((element)=>{
        console.log(element);
    });
    console.log("Sumando uno a cada elemento")
     let resultado = 0
    for (let index = 0; index < numeros.length; index++) {
        resultado = numeros[index]
        console.log(resultado+1)
        

    };
    console.log("Hacer la media");
    let suma = 0
    let media = 0;
    for (let index = 0; index < numeros.length; index++) {
        suma+=numeros[index]
    };
    media = suma/numeros.length
    console.log(media);






})
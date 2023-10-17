let button5 = document.getElementById("five");
button5.addEventListener("click",function () {
    while (true) {
        let num1 = prompt("Escribe primer numero");
        let num2 = prompt("Escribe el segundo numero");
        if(Number(num1)>0 && Number(num2)>0 ){
            let suma = num1+num2;
            let resta = num1-num2;
            let mul = num1*num2;
            let div = num1/num2;
            alert(`La suma es ${suma},
            la resta es ${resta},
            la multiplicacion es ${mul} y
            la división es ${div}`)
            if (suma=>0 && resta>=0 && mul>=0 && div>=0) {
             let decision = prompt("¿Desea continuar?(S/N)");
            if (decision=="N") {
                 
                break;
            }
            } else {
                alert("El programa ha finalizado");
                break;
            }
        }else{
            alert("El programa ha finalizado");
           break;
        }
    }
   
});

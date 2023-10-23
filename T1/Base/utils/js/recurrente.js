let button7 = document.getElementById("seven");
button7.addEventListener("click",function () {
    while (true) {
        let num1 = prompt("Escribe primer numero");
        let num2 = prompt("Escribe el segundo numero");
        if(Number(num1)>0 && Number(num2)>0 ){
            let suma = num1+num2;
            let resta = num1-num2;
            let mul = num1*num2;
            let div = num1/num2;
            let array = [suma,resta,mul,div];

            let res = prompt("¿Quieres realizar las operaciones?(S/N)");
            if(res=="S"){
                for (let index = 0; index < array.length; index++) {
                    setTimeout(function (){
                        console.log(array[index]);  
                      },2000);
                    
                }
                break

            }else{
                break
            }

          
             
            
        }else{
            alert("El programa ha finalizado");
           break;
        }
    }
});
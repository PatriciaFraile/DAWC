let button2 = document.getElementById("two");
button2.addEventListener("click",function () {
    let num = prompt("Escribe un numero del 1 al 100");
    if(Number(num)==num){
        if(num%3==0 && num%5==0){
            console.log("FizzBuzz")
        }else if(num%3==0){
            console.log("Fizz");
        }else if(num%5==0){
            console.log("Buzz");
        }else{
            console.log(num)
        }

    }else{
        alert("Tiene que ser un numero");
    }
});
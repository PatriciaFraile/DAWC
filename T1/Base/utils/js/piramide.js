let button = document.getElementById("one");
button.addEventListener("click",function () {
    while (true) {
        let valor = prompt("¿Cuantas filas quieres que aparezca?");
        if(Number(valor)== valor){
            if (valor>0) {
                for (let i = 1 ; i<=valor; ++i){
                    let resultado = '';
                    for(let j = 1 ; j<=i;++j){
                        resultado+='*';
                    }
                    console.log(resultado);
                }  
                break;
            }else{
                alert("Tiene que ser mayor que 0")
            }
        }else{
            alert("Tiene que ser un numero")     
        } 
    }
}  );
   


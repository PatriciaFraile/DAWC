let button3 = document.getElementById("three");
button3.addEventListener("click",function () {
    let resultado = '';
    for(let i=1; i<=8;i++){
        for (let j = 1; j <=8; j++) {
            if((j+i)%2==0){
                resultado+=' ';
            }else{
                resultado+='#';
            }
        }
        resultado+='\n';

    }
    console.log(resultado);

});
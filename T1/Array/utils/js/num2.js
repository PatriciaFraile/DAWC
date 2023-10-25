let button2 = document.getElementById("two");
button2.addEventListener("click", function(){
    let numeros = []
    let numeros1 = 21

    while(numeros.length < numeros1 ){
        let aleatorio = Math.trunc(Math.random()*numeros1);
        let existe = false;
        for(let i=1;i<numeros.length;i++){
          if(numeros [i] == aleatorio){
              existe = true;
              break;
          }
        }
        if(!existe){
          numeros[numeros.length] = aleatorio;
        }
      
      }
  console.log(numeros)
  let pares = []
  for (let i = 0; i < numeros.length; i++) {
    if(numeros[i]%2==0){
        pares.push(numeros[i])

    }
  }
  console.log("Los pares son : ");
  console.log(pares)
  let maximo = 0
  for (let j = 0; j < numeros.length; j++) {
    if(maximo<numeros[j]){
        maximo = numeros[j]
    }
  }
  console.log("El numero maximo es:")
  console.log(maximo)
  let minimo = 0
  for (let k = 0; k < numeros.length; k++) {
    if(minimo>numeros[k]){
        minimo = numeros[k]
    }
  }
  console.log(minimo)

  console.log("La media");
  let suma = 0
  let media = 0
  for (let q = 0; q < numeros.length; q++) {
    suma+=numeros[q]
  }
  media = suma/numeros.length
  console.log(media)


})
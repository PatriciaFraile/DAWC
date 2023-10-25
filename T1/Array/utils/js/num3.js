let button3 = document.getElementById("three")
button3.addEventListener("click", function () {
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    let maximo = 0
    let minimo = ages[0]
    let agess = ages.sort()
    for (let index = 0; index < agess.length; index++) {
        if(maximo<agess[index]){
            maximo = agess[index]
        }
        if (agess[index]<minimo) {
            minimo = agess[index]
            
        }
    }
    console.log(agess)
    console.log(maximo)
    console.log(minimo)
    let suma = 0
  let media = 0
  for (let q = 0; q < agess.length; q++) {
    suma+=agess[q]
  }
  media = suma/agess.length
  console.log(media)
})
let button4 = document.getElementById("four");
button4.addEventListener("click",function () {
    let dia = prompt("Dia de tu cumpleaños");
    let mes = prompt("Mes de tu cumpleaños");
    let anio = prompt("Año de tu cumpleaños");
    let nacimiento = new Date(anio,mes,dia);
    let tiempoPasado = new Date()-nacimiento;
    let segundos = 1000;
    let minutos =  segundos*60;
    let horas = minutos*60;
    let days = horas*24;
    let months = days * 30.417;
    let years = months * 12;
    let anos = Math.floor(tiempoPasado / years);
    tiempoPasado = tiempoPasado - (anos * years);
    let meses = Math.floor(tiempoPasado / months)
    
    tiempoPasado = tiempoPasado - (meses * months);
    let dias = Math.floor(tiempoPasado / days)
    
    tiempoPasado = tiempoPasado - (dias * days);
    let hours = Math.floor(tiempoPasado / horas)
    
    tiempoPasado = tiempoPasado - (hours * horas);
    let mins = Math.floor(tiempoPasado / minutos)

    tiempoPasado = tiempoPasado - (mins * minutos);
    let segs = Math.floor(tiempoPasado / segundos)
    console.log(`Ha pasado ${hours} dias desde tu cumpleaños`)
    

   
});
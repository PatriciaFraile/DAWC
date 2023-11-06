  class jugador{
    nombre;
    posicion;
    valor;

    constructor(nombre1 , posicion1, valor1){
        this.nombre = nombre1;
        this.posicion = posicion1;
        this.valor = valor1;
    }
    mostrarDatos(){
        console.log(`Nombre : ${this.nombre}`);
        console.log(`Posicion : ${this.posicion}`);
        console.log(`Valor : ${this.valor}`);
    }
    get getNombre(){
        return this.nombre;
    }
    get getPosicion(){
        return this.posicion;
    }
    get getValor(){
        return this.valor();
    }
    set setNombre(param){
        this.nombre = param;
    }
    set setPosicion(param){
        this.posicion = param;
    }
    set setValor(param){
        this.valor = param;
    }
}
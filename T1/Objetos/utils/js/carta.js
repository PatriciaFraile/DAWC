class carta{
    nombre ;
    valor;
    constructor(nombre, valor){
        this.nombre = nombre;
        this.valor = valor;
    }
    get getNombre(){
        return this.nombre;
    }
    get getValor(){
        return this.valor;
    }
    
}
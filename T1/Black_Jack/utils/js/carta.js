class carta{
    valor;
    nombre;
    imagen;
    constructor(nombre){
        this.valor = this.calcularValor();
        this.nombre = nombre;
        this.imagen =  nombre + "png"
    }
    calcularValor(){
        let valor = this.nombre.substring(0,this.nombre.lenght-1);
        switch (valor) {
            case "J":
            case "Q":
            case "K":
                valor = 10
                break;
            default:
                valor = Number(this.nombre.substring(0,this.nombre.lenght-1));
        }
        return valor;
        }
        mostrarDatos(){
            console.log(`Nombre: ${this.nombre},
            Valor: ${this.valor},
            Imagen : ${this.imagen} `)
        }
}
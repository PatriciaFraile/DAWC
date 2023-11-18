class carta{
    valor;
    nombre;
    imagen;
    constructor(nombre){
        this.nombre = nombre;
        this.imagen =  nombre + ".png"
        this.valor = this.calcularValor()
    }
    calcularValor() {
        let valor = this.nombre.substring(0, this.nombre.length - 1);
    
        switch (valor) {
          case "K":
          case "J":
          case "Q":
            valor = 10;
            break;
          default:
            valor = Number(this.nombre.substring(0, this.nombre.length - 1));
            break;
        }
    
        return valor;
      }
    
        mostrarDatos(){
            console.log(`Nombre: ${this.nombre} `)
            console.log(`Imagen: ${this.imagen} `)
            console.log(`Valor: ${this.valor} `)

        }
}
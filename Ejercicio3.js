class Producto {
  constructor(Nombre, precio, marca) {
    this.Nombre = Nombre;
    this.precio = precio;
    this.marca = marca;
  }
  descripcion() {
    console.log("Nombre producto: ", this.Nombre,"\nPrecio: ",this.precio,"\nMarca: ",this.marca);
  }
}

class Telefono extends Producto {
  constructor(Nombre, precio, marca, almacenamiento, ram) {
    super(Nombre, precio, marca); // Llama al constructor de la clase padre
    this.almacenamiento = almacenamiento;
    this.ram = ram;
  }
  descripcion() {
    console.log("Telefono");    
    console.log("Nombre producto: ", this.Nombre,"\nPrecio: ",this.precio,"\nMarca: ",this.marca,"\nAlmacenamiento: ",this.almacenamiento, "\nRam: ", this.ram);
  }
}
class Laptop extends Producto {
  constructor(Nombre, precio, marca, procesador, pulgadas) {
    super(Nombre, precio, marca); // Llama al constructor de la clase padre
    this.procesador = procesador;
    this.pulgadas = pulgadas;
  }
  descripcion() {
    console.log("Laptop");    
    console.log("Nombre producto: ", this.Nombre,"\nPrecio: ",this.precio,"\nMarca: ",this.marca, "\nProcesador: ",this.procesador,"\nTamaño: ",this.pulgadas);
  }
}
// Crear una instancia de la clase
const telefono1 = new Telefono("A78", 800000, "OPPO", "128GB", "8 ram");
const laptop1 = new Laptop("Vivobook", 2500000,"Asus", "Ryzen 5", "14 pulgadas");

telefono1.descripcion();
console.log("\n");
laptop1.descripcion();
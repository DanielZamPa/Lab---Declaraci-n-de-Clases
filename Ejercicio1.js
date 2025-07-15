class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }
  obtenerDetalles() {
    console.log("Marca del vehiculo: ", this.marca,"\nModelo: ",this.modelo,"\nAño: ",this.año);      
  }
}

class Coche extends Vehiculo {
  constructor(marca, modelo, año, numeroPuertas) {
    super(marca, modelo, año); // Llama al constructor de la clase padre
    this.numeroPuertas = numeroPuertas;
  }
}
class Moto extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año); // Llama al constructor de la clase padre
    this.numeroPuertas = cilindrada;
  }
}
// Crear una instancia de la clase
const Coche1 = new Coche("BYD", "Seagull", 2017, 4);
const Moto1 = new Moto("Vmoto", "Stash", 2022, 150);

Coche1.obtenerDetalles();
Moto1.obtenerDetalles();
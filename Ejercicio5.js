class Animal {
  constructor(Nombre, edad) {
    this.Nombre = Nombre;
    this.edad = edad;    
  }
  emitirSonido() {}  
}

class Perro extends Animal {
  constructor(Nombre, edad) {
    super(Nombre, edad); // Llama al constructor de la clase padre
  }
  emitirSonido() {
    console.log("Perro");    
    console.log("¡Guau!");
  }
}
class Gato extends Animal {
  constructor(Nombre, edad) {
    super(Nombre, edad); // Llama al constructor de la clase padre
  }
  emitirSonido() {
    console.log("Gato");    
    console.log("¡Miau!");
  }
}
// Crear una instancia de la clase
const perro1 = new Perro("Milo", "4 años");
const gato1 = new Gato("Luna", "6 años");

perro1.emitirSonido();
console.log("\n")
gato1.emitirSonido();
class Figura {
  constructor(color) {
    this.color = color;
  }
  area() {
    return 0;
  }
}

class Rectangulo extends Figura {
  constructor(color, base, altura) {
    super(color); // Llama al constructor de la clase padre
    this.base = base;
    this.altura = altura;
  }
  area() {
    console.log("Rectangulo de color: ", this.color);    
    console.log("El area es: ", this.base*this.altura);
  }
}
class Circulo extends Figura {
  constructor(color, radio) {
    super(color); // Llama al constructor de la clase padre
    this.radio = radio;
  }
  area() {
    const pi = Math.PI;
    console.log("Circulo de color: ", this.color);    
    console.log("El area es: ", pi*(this.radio^2));
  }
}
// Crear una instancia de la clase
const rectangulo1 = new Rectangulo("Rojo", 4, 3);
const circulo1 = new Circulo("Azul", 10);

rectangulo1.area();
console.log("\n");
circulo1.area();
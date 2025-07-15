class Empleado {
  constructor(Nombre, edad, salarioBase) {
    this.Nombre = Nombre;
    this.edad = edad;
    this.salarioBase = salarioBase;
  }
  calcularSalario() {
    console.log("Metodo de clase calcular salario.");    
  }
}

class Coche extends Empleado {
  constructor(Nombre, edad, salarioBase, bonificacion) {
    super(Nombre, edad, salarioBase); // Llama al constructor de la clase padre
    this.bonificacion = bonificacion;
  }
  calcularSalario() {
    return this.salarioBase+this.bonificacion  
  }
}
class Moto extends Empleado {
  constructor(Nombre, edad, salarioBase, lenguaje) {
    super(Nombre, edad, salarioBase); // Llama al constructor de la clase padre
    this.lenguaje = lenguaje;
  }
}
// Crear una instancia de la clase
const Coche1 = new Coche("BYD", "Seagull", 2017, 4);
const Moto1 = new Moto("Vmoto", "Stash", 2022, 150);

Coche1.obtenerDetalles();
Moto1.obtenerDetalles();
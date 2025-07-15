class Empleado {
  constructor(Nombre, edad, salarioBase) {
    this.Nombre = Nombre;
    this.edad = edad;
    this.salarioBase = salarioBase;
  }
  calcularSalario() {
    console.log("Salario: ", this.salarioBase);
  }
}

class Gerente extends Empleado {
  constructor(Nombre, edad, salarioBase, bonificacion) {
    super(Nombre, edad, salarioBase); // Llama al constructor de la clase padre
    this.bonificacion = bonificacion;
  }
  calcularSalario() {
    console.log("Gerente");
    console.log("Salario con bonificación: ", this.salarioBase+this.bonificacion);
  }
}
class Desarrollador extends Empleado {
  constructor(Nombre, edad, salarioBase, lenguaje) {
    super(Nombre, edad, salarioBase); // Llama al constructor de la clase padre
    this.lenguaje = lenguaje;
  }
}
// Crear una instancia de la clase
const Gerente1 = new Gerente("Diego Mahecha", 34, 6000000, 1000000);
const Desarrollador1 = new Desarrollador("Daniel Zamora", 23, 3000000, "Java");

Gerente1.calcularSalario();
console.log("\nDesarrollador");
Desarrollador1.calcularSalario();
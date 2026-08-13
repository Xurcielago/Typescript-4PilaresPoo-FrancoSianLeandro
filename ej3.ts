//Ejercicio 3 — Herencia
abstract class Empleado {
    protected nombre: string;
    protected antiguedad: number;
    constructor(nombre: string, antiguedad: number) {
        this.nombre = nombre;
        this.antiguedad = antiguedad;
    }

    abstract calcularSueldo(): number;

    describir(): string {
        return `${this.nombre} (${this.antiguedad} años) — sueldo: $${this.calcularSueldo()}`;
    }
}

class EmpleadoFijo extends Empleado {
    private sueldoBase: number;

    constructor(nombre: string, antiguedad: number, sueldoBase: number) {
        super(nombre, antiguedad);
        this.sueldoBase = sueldoBase;
    }

    calcularSueldo(): number {
        const bono = this.sueldoBase * 0.02 * this.antiguedad;
        return this.sueldoBase + bono;
    }
}

const empFijo = new EmpleadoFijo("Bob", 5, 100000);
console.log(empFijo.describir());

const empleados: Empleado[] = [
    new EmpleadoFijo("Carlos", 2, 100000),
    new EmpleadoFijo("Ana", 10, 100000)
];

empleados.forEach(emp => console.log(emp.describir()));
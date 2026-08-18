//Ejercicio 4 — Polimorfismo
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

class EmpleadoPorHoras extends Empleado {
    private horasTrabajadas: number;
    private valorHora: number;

    constructor(nombre: string, antiguedad: number, horasTrabajadas: number, valorHora: number) {
        super(nombre, antiguedad);
        this.horasTrabajadas = horasTrabajadas;
        this.valorHora = valorHora;
    }

    calcularSueldo(): number {
        return this.horasTrabajadas * this.valorHora;
    }
}

class EmpleadoPorComision extends Empleado {
    private ventasDelMes: number;
    private porcentajeComision: number;

    constructor(nombre: string, antiguedad: number, ventasDelMes: number, porcentajeComision: number) {
        super(nombre, antiguedad);
        this.ventasDelMes = ventasDelMes;
        this.porcentajeComision = porcentajeComision;
    }

    calcularSueldo(): number {
        return this.ventasDelMes * this.porcentajeComision;
    }
}

function calcularNomina(empleados: Empleado[]): number {
    let total = 0;
    for (const emp of empleados) {
        total += emp.calcularSueldo();
    }
    return total;
}
//Empleado fijo: Nombre - Antiguedad - Sueldo
//Empleado por Hora: Nombre - Antiguedad - Horas trabajadas - Sueldo por Hora 
//Empleado Por Comisión: Nombre - Antiguedad - Sueldo - Porcentaje de Comisión
const empleados: Empleado[] = [
    new EmpleadoFijo("María", 5, 100000),
    new EmpleadoFijo("Luis", 8, 100000),
    new EmpleadoPorHoras("Carlos", 2, 40, 1000),
    new EmpleadoPorHoras("Elena", 1, 40, 1000),
    new EmpleadoPorComision("Ana", 10, 100000, 0.10),
    new EmpleadoPorComision("Pedro", 2, 100000, 0.10)
];

for (const emp of empleados) {
    console.log(emp.describir()); 
}

const totalNomina = calcularNomina(empleados);
console.log(`Total a pagar: $${totalNomina}`);
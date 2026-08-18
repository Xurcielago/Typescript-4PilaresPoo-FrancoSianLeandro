//Ejercicio 5 — Getters y setters
class Persona {
    private readonly dni: string;
    public nombre: string;
    private edad: number;
    private email: string;

    constructor(dni: string, nombre: string, edad: number, email: string) {
        this.dni = dni;          
        this.nombre = nombre;    
        this.edad = edad;      
        this.email = email;      
    }

    get obtenerEdad(): number {
        return this.edad;
    }

    set modificarEdad(valor: number) {
        if (valor < 0 || valor > 120) {
            throw new Error("La edad debe estar entre 0 y 120.");
        }
        this.edad = valor;
    }

    get obtenerEmail(): string {
        return this.email;
    }

    set modificarEmail(valor: string) {
        if (!valor.includes("@")) {
            throw new Error("El email debe contener @.");
        }
        this.email = valor;
    }

    get esMayorDeEdad(): boolean {
        return this.edad >= 18;
    }

    get datosPublicos(): string {
        return `Nombre: ${this.nombre}, esMayorDeEdad: ${this.esMayorDeEdad}`;
    }
}

const persona = new Persona("12345678", "Ana", 25, "ana@mail.com");

console.log(persona.nombre);
console.log(persona.obtenerEdad); 
console.log(persona.obtenerEmail); 
console.log(persona.esMayorDeEdad);
console.log(persona.datosPublicos); 
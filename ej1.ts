//Ejercicio 1 — Abstracción
class Producto {
    nombre: string
    precio: number
    categoria: string
    stock: number
    constructor (nombre: string, precio: number, categoria: string, stock: number) {
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.stock = stock
    }
    describir(): string {
        return `${this.nombre} (${this.categoria}): $${this.precio} — ${this.stock} unidades`
    }
    hayStock(cantidad: number): boolean {
        if ((this.stock-cantidad) >= 0) {
            return true
        } else {
            return false
        }
    }
    venderUnidades(cantidad: number): void {
        if (!this.hayStock(cantidad)) {
            throw new Error(`Stock insuficiente para vender ${cantidad} unidades de "${this.nombre}"`);
        }
        this.stock -= cantidad;
        //Se lanza un error y se detiene el flujo porque de otra forma podría afectar al funcionamiento del negocio.
    }
    aplicarDescuento(porcentaje: number): number {
        return this.precio * (1 - porcentaje / 100);
    }
}
//Ejercicio 2 — Encapsulamiento
class CuentaBancaria {
    private readonly titular: string;
    private saldo: number;
    private historial: { tipo: string, monto: number } [];
    constructor (titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
        this.historial = [];
    }

    get nombreTitular(): string {
        return this.titular;
    }

    public depositar(monto: number): void {
        if (monto <= 0) {
            throw new Error("El monto a depositar debe ser mayor a 0.");
        }
        this.saldo += monto;
        this.historial.push({ tipo: "depósito", monto });
    }

    public retirar(monto: number): void {
        if (monto <= 0) {
            throw new Error("El monto a retirar debe ser mayor a 0.");
        }
        if (monto > this.saldo) {
            throw new Error("Fondos insuficientes. No se puede retirar más del saldo disponible.");
        }
        this.saldo -= monto;
        this.historial.push({ tipo: "retiro", monto });
    }

    public consultarSaldo(): number {
        return this.saldo;
    }
        public obtenerHistorial(): { tipo: string; monto: number }[] {
        return this.historial.map(mov => ({ tipo: mov.tipo, monto: mov.monto }));
    }
}

const cuenta = new CuentaBancaria("John CuentaBancaria", 5000);
console.log(cuenta.nombreTitular)
cuenta.depositar(2000);
console.log(cuenta.consultarSaldo()); 
cuenta.retirar(1000);
console.log(cuenta.consultarSaldo()); 
console.log(cuenta.obtenerHistorial());
// Cl_mDonante.ts

export default class Cl_mDonante {
    private _nombre: string;
    private _dolares: number;
    private _bolivares: number;

    constructor({nombre, dolares, bolivares}:
        {nombre: string, dolares: number, bolivares: number} =
        {nombre: "", dolares: 0, bolivares: 0}) {

        this._nombre = nombre;
        this._dolares = dolares;
        this._bolivares = bolivares;
    }   

    set nombre(n: string) {
        this._nombre = n;
    }

    get nombre(): string {
        return this._nombre;
    }

    set dolares(d: number) {
        this._dolares = d;
    }

    get dolares(): number {
        return this._dolares;
    }

    set bolivares(b: number) {
        this._bolivares = b;
    }

    get bolivares(): number {
        return this._bolivares;
    }

    // Falta los Metodos de Transformacion de Bs a $ y de $ a Bs.
}
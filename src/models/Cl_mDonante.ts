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

        // Validar que el nombre sea una cadena de texto
            if(typeof n !== "string")
                {   throw new Error("El nombre debe ser una cadena de texto"); }

                    this._nombre = n;
    }

    get nombre(): string {
        return this._nombre;
    }

    set dolares(d: number) {

        // Validamos Los dólares para que no sea un Numero Negativo
            if (d < 0) 
                {throw new Error("El monto en dólares no puede ser negativo");    }

                    this._dolares = +d;
    }

    get dolares(): number {
        return this._dolares;
    }

    set bolivares(b: number) {

        // Validamos Los Bolivares para que no sea un Numero Negativo
            if (b < 0) 
                {throw new Error("El monto en bolívares no puede ser negativo");    }

                    this._bolivares = +b;
    }

    get bolivares(): number {
        return this._bolivares;
    }

    aporteTotalDolares(): number {
        // Declaramos la tasa de cambio para convertir los bolívares a dólares
            const tasaCambio = 40; // Bs.40 por dólar

            return this.dolares + (this.bolivares / tasaCambio);
    }

    aporteTotalBolivares(): number {
        // Declaramos la tasa de cambio para convertir los dólares a bolívares
            const tasaCambio = 40; // Bs.40 por dólar

            return this.bolivares + (this.dolares * tasaCambio);
    }
    
}

/*     20. FUNDACIÓN VIEJITOS

        La Fundación Viejitos tiene cierta cantidad de dólares y bolívares, y también se sabe la tasa
    de cambio. Los donantes traen dólares y bolívares. Se desea saber cuánto total aporta cada
    uno, en dólares y bolívares, y también cuánto es el total final en dólares y bolívares, y quién fue
    el mejor donador.

        Si tomamos una tasa de cambio de Bs.40 por dólar, y los donantes fuesen Sofía con $10 y
    Bs.80, Mateo con Bs.600, Elena con $50, y David con $20 y Bs.100, entonces tendríamos el
    siguiente resultado:

        Donante     Dólares Aportados     Bolívares Aportados     Total en Dólares     Total en Bolívares
        Sofía       $10                 Bs.80                   $12.5               Bs.500
        Mateo       $0                  Bs.600                  $15                 Bs.600
        Elena       $50                 Bs.0                    $50                 Bs.0
        David       $20                 Bs.100                  $22.5               Bs.200

    Reporte Totales Varios: Total en Dólares: $100, Total en Bolívares: Bs.700, Mejor Donante: Elena. */
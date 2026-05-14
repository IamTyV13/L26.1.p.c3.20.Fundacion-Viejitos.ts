// Cl_vDonante.ts

import { I_vDonante } from "../interfaces/I_vDonante.js";

export default class Cl_vDonantePlain implements I_vDonante {
    private inNombre: HTMLInputElement;
    private inDolares: HTMLInputElement;
    private inBolivares: HTMLInputElement;
    private btCancelar: HTMLButtonElement;
    private btAceptar: HTMLButtonElement;
    private vista: HTMLElement;

    constructor() {
        this.inNombre = document.getElementById("donante_inNombre") as HTMLInputElement;
        this.inDolares = document.getElementById("donante_inDolares") as HTMLInputElement;
        this.inBolivares = document.getElementById("donante_inBolivares") as HTMLInputElement;
        this.btCancelar = document.getElementById("donante_btCancelar") as HTMLButtonElement;
        this.btAceptar = document.getElementById("donante_btAceptar") as HTMLButtonElement;
        this.vista = document.getElementById("donante") as HTMLElement;

        // Escuchamos los Cambios de Todos los Campos
            this.inNombre.addEventListener("input", () => this.validarBoton());
            this.inDolares.addEventListener("input", () => this.validarBoton());
            this.inBolivares.addEventListener("input", () => this.validarBoton());

        // Validamos el Botón para procesar los atributos del Donante
            this.validarBoton();

    }

    // Método para Validar el Botón Aceptar, Solo se Habilitará si Cumple las Condiciones "Correctas"
        private validarBoton(): void {

            // Validamos el Nombre para que no sea Vacío, ni tenga Números, Solo Letras y Espacios

                const soloLetras =/^[a-zA-ZáéíóúñÑÁÉÍÓÚ\s]+$/; // Solo letras Incluyendo Acentos y espacios.
                const nombre = this.inNombre.value.trim(); // trim quita los Espacios al inicio y al final.
                const nombreValido = nombre !== "" && soloLetras.test(nombre); // test es un metodo que dice Si la palabra no tiene Numeros(V/F).

            // Validamos los Dolares para que no sean Negativos, ni Vacíos, Solo Números
                const dolaresValidos = this.inDolares.value !== "" && parseFloat(this.inDolares.value) >= 0;

            // Validamos los Bolivares para que no sean Negativos, ni Vacíos, Solo Números
                const bolivaresValidos = this.inBolivares.value !== "" && parseFloat(this.inBolivares.value) >= 0;

            // Habilitamos el Botón Aceptar Solo si y solo si
                const todoValido = nombreValido && dolaresValidos && bolivaresValidos;

            // Desactivar Boton Si no Cumple algo 
                this.btAceptar.disabled = !todoValido;

            // Cambiamos el Estilo del Botón para que se Vea Deshabilitado o Habilitado
                if (todoValido) {
                    this.btAceptar.style.opacity = "1";
                    this.btAceptar.style.cursor = "pointer";    }

                else {                        
                    this.btAceptar.style.opacity = "0.5";
                    this.btAceptar.style.cursor = "not-allowed"     }
        }

    get nombre(): string {
        return this.inNombre.value;     }

    get dolares(): number {
        return +this.inDolares.value;   }

    get bolivares(): number {
        return +this.inBolivares.value; }

    onAceptar(callback: () => void): void {
        this.btAceptar.onclick = callback;   }

    onCancelar(callback: () => void): void {
        this.btCancelar.onclick = callback;  }

    mostrar(): void {
        if (this.vista === null ) return;
            this.vista.hidden = false;
            this.inNombre.value = "";
            this.inDolares.value = "";
            this.inBolivares.value = "";
            this.validarBoton();
        }

    ocultar(): void {
        if (this.vista === null) return;
            this.vista.hidden = true;
    }

}

/*
    20. FUNDACIÓN VIEJITOS

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

    Reporte Totales Varios: Total en Dólares: $100, Total en Bolívares: Bs.700, Mejor Donante: Elena.
*/
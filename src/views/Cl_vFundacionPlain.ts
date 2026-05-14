// Cl_vFundacionPlain.ts

import { I_vFundacion } from "../interfaces/I_vFundacion.js";
import Cl_mDonante from "../models/Cl_mDonante.js";

const html = String.raw; 
/* 
   String.ra2: Sirve para tomar el texto exactamente como lo escribes 
(sin interpretar caracteres especiales como \n, \t, etc.) 
*/

export default class Cl_vFundacionPlain implements I_vFundacion {
    private lblTotalDolares: HTMLElement;
    private lblTotalBolivares: HTMLElement;
    private lblMejorDonador: HTMLElement;
    private btNewDonante: HTMLButtonElement;
    private tbDonantes: HTMLTableElement;
    private vista: HTMLElement | null;

    constructor() {
        this.lblTotalDolares = document.getElementById("body_lblTotalDolares") as HTMLElement;
        this.lblTotalBolivares = document.getElementById("body_lblTotalBolivares") as HTMLElement;
        this.lblMejorDonador = document.getElementById("body_lblMejorDonador") as HTMLElement;
        this.btNewDonante = document.getElementById("body_btNewDonante") as HTMLButtonElement;
        this.tbDonantes = document.getElementById("body_tbDonantes") as HTMLTableElement;
        this.vista = document.getElementById("body") as HTMLElement;
    }

    onNewDonante(callback: () => void): void {
        this.btNewDonante.onclick = callback;      }

    mostrarDonantes({
            
        donantes,
        /* aporteTotalDolares, // Poner este metodo a la tabla
        aporteTotalBolivares, // "" */
        totalDolares,
        totalBolivares,
        mejorDonador,

    } : {

        donantes: Cl_mDonante[];
        /* aporteTotalDolares: number;
        aporteTotalBolivares: number; */
        totalDolares: number;
        totalBolivares: number;
        mejorDonador: string;

    }) : void {

        this.tbDonantes.innerHTML = "";
        donantes.forEach((donante) => {

            const tr = document.createElement("tr");

                tr.innerHTML = html`
                    <td>${donante.nombre}</td>
                    <td> $. ${donante.dolares}</td>
                    <td> Bs. ${donante.bolivares}</td>
                    <td> $. ${donante.aporteTotalDolares().toFixed(2)}</td>
                    <td> Bs. ${donante.aporteTotalBolivares().toFixed(2)}</td>
                `;

            this.tbDonantes.appendChild(tr);
        });
        this.lblTotalDolares.innerHTML = totalDolares.toString();
        this.lblTotalBolivares.innerHTML = totalBolivares.toString();
        this.lblMejorDonador.innerHTML = mejorDonador;
    };
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
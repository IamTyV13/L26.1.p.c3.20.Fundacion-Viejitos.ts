// I_vFundacion.ts

import Cl_mDonante from "../models/Cl_mDonante.js";

export interface I_vFundacion {

    // Exponemos Una Acción 
        onNewDonante(callback: () => void): void;
        mostrarDonantes({

            donantes, // Arreglo
            totalDolares, // Acumulador de la Suma de Dolares
            totalBolivares, // Acumulador de la Suma de Bolivares
            mejorDonador, // Nombre del Mejor Donador "with Mayor"

        } : {

            donantes: Cl_mDonante[];
            totalDolares: number;
            totalBolivares: number;
            mejorDonador: string;
            
        }): void;
}
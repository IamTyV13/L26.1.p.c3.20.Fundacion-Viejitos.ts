// Cl_mFundacion.ts

import Cl_mDonante from "./Cl_mDonante.js";

export default class Cl_mFundacion {
    public donantes: Cl_mDonante[] = [];

    agregarDonante(donante: Cl_mDonante): void {
        this.donantes.push(donante);
    }

    totalDolares(): number {
        let total = 0;
        
        this.donantes.forEach(donante => {
            total += donante.aporteTotalDolares();  });
        
        return total;
    }

    totalBolivares(): number {
        let total = 0;

        this.donantes.forEach(donante => {
            total += donante.aporteTotalBolivares();    });
        
        return total;
    }

    mejorDonador(): string {

        // Si no hay donantes, retornar un mensaje indicando que no hay donantes disponibles
            if(this.donantes.length === 0) return "No hay donantes";

        // Inicializar el mejor donante y su aporte con el primer donante de la lista
            let mejorDonante = this.donantes[0].nombre;
            let mejorAporte = this.donantes[0].aporteTotalDolares();

        // Recorrer la lista de donantes para encontrar el que tiene el mayor aporte en dólares
            this.donantes.forEach(donante => {
                const aporteActual = donante.aporteTotalDolares();
                if (aporteActual > mejorAporte) {
                    mejorAporte = aporteActual;
                    mejorDonante = donante.nombre;
                }
            }); 
            return mejorDonante; 
    }
    
    /* 
        Nota: "El arreglo donantes es el 'procesar' porque ahí se 
        guardan los datos y los métodos del modelo lo recorren para hacer los cálculos." 
    */

}
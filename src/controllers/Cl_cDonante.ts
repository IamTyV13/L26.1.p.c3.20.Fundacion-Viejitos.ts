// Cl_cDonante.ts

import Cl_mDonante from "../models/Cl_mDonante.js";
import { I_vDonante } from "../interfaces/I_vDonante.js";

export default class Cl_cDonante {
    private vista: I_vDonante;
    private callback!: (donante: Cl_mDonante | null ) => void;

    constructor(vista: I_vDonante) {
        // Inicializamos Vista
            this.vista = vista;
        // El Controlador Realiza los Eventos de la Interfaz
            this.vista.onCancelar (() => this.btCancelarOnclick());
            this.vista.onAceptar (() => this.btAceptarOnclick());
    }

    // Metodo para que El Fundacion llame a este Controlador
        solicitarDonante(callback: (donante: Cl_mDonante | null) => void) {
            this.callback = callback;
            this.vista.mostrar();
        }

        private btCancelarOnclick() {
            this.callback(null);
            this.vista.ocultar();
        }

        private btAceptarOnclick() {
            this.callback(new Cl_mDonante({
                nombre:this.vista.nombre, 
                dolares:this.vista.dolares,
                bolivares:this.vista.bolivares }));
            this.vista.ocultar();
        }
}
// Cl_cFundacion.ts

import Cl_mFundacion from "../models/Cl_mFundacion.js";
import { I_vFundacion } from "../interfaces/I_vFundacion.js";
import Cl_cDonante from "./Cl_cDonante.js";

export default class Cl_cFundacion {
  private mFundacion: Cl_mFundacion = new Cl_mFundacion();
  private vFundacion: I_vFundacion;
  private cDonante: Cl_cDonante;

  // Recibe la vista de la Fundacion y el controlador del Donante ya armado
  constructor(vistaFundacion: I_vFundacion, controladorDonante: Cl_cDonante) {
    this.vFundacion = vistaFundacion;
    this.cDonante = controladorDonante;

    this.vFundacion.onNewDonante(() => this.procesar1Donante());
  }

  private procesar1Donante() {
    this.cDonante.solicitarDonante((donante) => {
      if (donante !== null) {
        this.mFundacion.agregarDonante(donante);
        this.vFundacion.mostrarDonantes({
            donantes: this.mFundacion.donantes,
            totalDolares: this.mFundacion.totalDolares(),
            totalBolivares: this.mFundacion.totalBolivares(),
            mejorDonador: this.mFundacion.mejorDonador(),
        });
      }
    });
  }
}
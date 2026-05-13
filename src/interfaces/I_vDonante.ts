// I_vDonante.ts

export interface I_vDonante {
    
    // Atributos de la Clase Menor
        get nombre(): string;
        get dolares(): number;
        get bolivares(): number;

    // Métodos de la Clase Menor
        mostrar(): void;
        ocultar(): void;

    // Botones de Aceptar y Cancelar
        onAceptar(callback: () => void): void;
        onCancelar(callback: () => void): void;
}
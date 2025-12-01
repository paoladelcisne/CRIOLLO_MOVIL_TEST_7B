export type Vehicle = {
    // Paso 1
    marca: string;
    modelo: string;

    // Paso 2
    placa: string;
    nombreDueno: string;
    ano: string;
    tipoGasolina: string;
}

export const emptyVehicle: Vehicle = {
    marca: '',
    modelo: '',
    placa: '',
    nombreDueno: '',
    ano: '',
    tipoGasolina: '',
}
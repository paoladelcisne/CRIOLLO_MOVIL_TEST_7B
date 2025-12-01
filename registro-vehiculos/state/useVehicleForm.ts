import { useState } from "react"
import { emptyVehicle, Vehicle } from "../models/vehicle"

export const TOTAL_STEPS = 3;

export const useVehicleForm = () => {
    const [vehicle, setVehicle] = useState<Vehicle>(emptyVehicle);
    const [step, setStep] = useState(0);
    const [registeredVehicles, setRegisteredVehicles] = useState<Vehicle[]>([]);

    const goToStep = (target: number) => setStep(target);

    const updateField = (field: keyof Vehicle, value: string) => {
        console.log(`${field}: ${value}`);
        setVehicle(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const nextStep = () => goToStep(step + 1);

    const prevStep = () => goToStep(step - 1);

    const registerVehicle = () => {
        setRegisteredVehicles(prev => [...prev, vehicle]);
        resetForm();
        goToStep(TOTAL_STEPS); // Ir a la pantalla de vehículos registrados
    }

    const resetForm = () => {
        setVehicle(emptyVehicle); // Limpia todos los campos del formulario           
        setStep(0); // Regresa al paso 0 que es la primera pantalla
    }

    return {
        vehicle,
        step,
        registeredVehicles,
        nextStep,
        prevStep,
        updateField,
        registerVehicle,
        resetForm
    };
}
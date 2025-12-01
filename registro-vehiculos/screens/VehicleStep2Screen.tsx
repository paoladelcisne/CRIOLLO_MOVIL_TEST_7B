import { View, Text, StyleSheet } from "react-native";
import { Vehicle } from "../models/vehicle";
import React from "react";
import { FormInput } from "../components/FormInput";
import { FormButton } from "../components/FormButton";

type VehicleStep2ScreenProps = {
    vehicle: Vehicle;
    onChange: (field: keyof Vehicle, value: string) => void;
    onNext: () => void;
    onBack: () => void;
}

export const VehicleStep2Screen = ({ vehicle, onChange, onNext, onBack }: VehicleStep2ScreenProps) => {
    const isDisabled = !vehicle.placa || !vehicle.nombreDueno || !vehicle.ano || !vehicle.tipoGasolina;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalle del vehículo</Text>

            <FormInput
                label="Placa"
                placeholder="Ingresa la placa"
                value={vehicle.placa}
                onChangeText={value => onChange('placa', value)}
            />

            <FormInput
                label="Nombre del dueño"
                placeholder="Ingresa el nombre del dueño"
                value={vehicle.nombreDueno}
                onChangeText={value => onChange('nombreDueno', value)}
            />

            <FormInput
                label="Año"
                placeholder="Ingresa el año"
                value={vehicle.ano}
                keyboardType="numeric"
                onChangeText={value => onChange('ano', value)}
            />

            <FormInput
                label="Tipo de gasolina"
                placeholder="Ej: Super, Extra, Diesel"
                value={vehicle.tipoGasolina}
                onChangeText={value => onChange('tipoGasolina', value)}
            />

            <View style={styles.buttonContainer}>
                <View style={styles.buttonHalf}>
                    <FormButton
                        label="Regresar"
                        onPress={onBack}
                        variant="secondary"
                    />
                </View>
                <View style={styles.buttonHalf}>
                    <FormButton
                        label="Continuar"
                        onPress={onNext}
                        disabled={isDisabled}
                        style={isDisabled && styles.disabledButton}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#f59e0b',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 0,
    },
    buttonHalf: {
        flex: 1,
    },
    disabledButton: {
        opacity: 0.5,
    }
})
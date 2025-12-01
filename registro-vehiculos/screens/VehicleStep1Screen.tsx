import { View, Text, StyleSheet } from "react-native";
import { Vehicle } from "../models/vehicle";
import React from "react";
import { FormInput } from "../components/FormInput";
import { FormButton } from "../components/FormButton";

type VehicleStep1ScreenProps = {
    vehicle: Vehicle;
    onChange: (field: keyof Vehicle, value: string) => void;
    onNext: () => void;
}

export const VehicleStep1Screen = ({ vehicle, onChange, onNext }: VehicleStep1ScreenProps) => {
    const isDisabled = !vehicle.marca || !vehicle.modelo;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Datos del vehículo</Text>

            <FormInput
                label="Marca"
                placeholder="Ingresa la marca"
                value={vehicle.marca}
                onChangeText={value => onChange('marca', value)}
            />

            <FormInput
                label="Modelo"
                placeholder="Ingresa el modelo"
                value={vehicle.modelo}
                onChangeText={value => onChange('modelo', value)}
            />

            <FormButton
                label="Continuar"
                onPress={onNext}
                disabled={isDisabled}
                style={isDisabled && styles.disabledButton}
            />
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
    disabledButton: {
        opacity: 0.5,
    }
})
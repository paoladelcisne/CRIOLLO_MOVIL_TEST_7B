import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Vehicle } from "../models/vehicle";
import { FormButton } from "../components/FormButton";

type SummaryScreenProps = {
    vehicle: Vehicle;
    onRegister: () => void;
    onBack: () => void;
}

export const SummaryScreen = ({ vehicle, onRegister, onBack }: SummaryScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resumen de registro</Text>

            <View style={styles.card}>
                <Text style={styles.row}>Marca: {vehicle.marca}</Text>
                <Text style={styles.row}>Modelo: {vehicle.modelo}</Text>
                <Text style={styles.row}>Placa: {vehicle.placa}</Text>
                <Text style={styles.row}>Nombre dueño: {vehicle.nombreDueno}</Text>
                <Text style={styles.row}>Año: {vehicle.ano}</Text>
                <Text style={styles.row}>Tipo de gasolina: {vehicle.tipoGasolina}</Text>
            </View>

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
                        label="Registrar"
                        onPress={onRegister}
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
    card: {
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24,
        backgroundColor: '#fef3c7',
    },
    row: {
        fontSize: 16,
        marginBottom: 8,
        color: '#111827',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 0,
    },
    buttonHalf: {
        flex: 1,
    }
})
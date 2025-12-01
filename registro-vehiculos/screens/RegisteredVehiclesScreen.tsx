import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Vehicle } from "../models/vehicle";
import { FormButton } from "../components/FormButton";

type RegisteredVehiclesScreenProps = {
    vehicles: Vehicle[];
    onRegisterAnother: () => void;
}

export const RegisteredVehiclesScreen = ({ vehicles, onRegisterAnother }: RegisteredVehiclesScreenProps) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                {vehicles.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No hay vehículos registrados aún</Text>
                    </View>
                ) : (
                    vehicles.map((vehicle, index) => (
                        <View key={index} style={styles.vehicleCard}>
                            <View style={styles.headerRow}>
                                <Text style={styles.label}>placa</Text>
                                <Text style={styles.label}>dueño</Text>
                                <Text style={styles.label}>marca</Text>
                                <Text style={styles.label}>modelo</Text>
                            </View>

                            <View style={styles.dataRow}>
                                <Text style={styles.data}>{vehicle.placa}</Text>
                                <Text style={styles.data}>{vehicle.nombreDueno}</Text>
                                <Text style={styles.data}>{vehicle.marca}</Text>
                                <Text style={styles.data}>{vehicle.modelo}</Text>
                            </View>

                            <View style={styles.divider} />

                            <View style={styles.detailsContainer}>
                                <Text style={styles.detailText}>Año: {vehicle.ano}</Text>
                                <Text style={styles.detailText}>Gasolina: {vehicle.tipoGasolina}</Text>
                            </View>
                        </View>
                    ))
                )}
            </ScrollView>

            <FormButton
                label="Registrar otro"
                onPress={onRegisterAnother}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 20,
    },
    emptyContainer: {
        padding: 40,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#6b7280',
        textAlign: 'center',
    },
    vehicleCard: {
        backgroundColor: '#fef3c7',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#fbbf24',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    label: {
        fontSize: 12,
        color: '#78350f',
        fontWeight: '600',
        flex: 1,
        textAlign: 'center',
    },
    dataRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    data: {
        fontSize: 14,
        color: '#111827',
        fontWeight: '500',
        flex: 1,
        textAlign: 'center',
    },
    divider: {
        height: 1,
        backgroundColor: 'white',
        marginVertical: 12,
    },
    detailsContainer: {
        gap: 4,
    },
    detailText: {
        fontSize: 14,
        color: '#78350f',
    }
})
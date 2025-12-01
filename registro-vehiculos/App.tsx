import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { VehicleStep1Screen } from './screens/VehicleStep1Screen';
import { VehicleStep2Screen } from './screens/VehicleStep2Screen';
import { SummaryScreen } from './screens/SummaryScreen';
import { RegisteredVehiclesScreen } from './screens/RegisteredVehiclesScreen';
import { TOTAL_STEPS, useVehicleForm } from './state/useVehicleForm';

export default function App() {
  const { 
    vehicle, 
    step, 
    registeredVehicles,
    nextStep, 
    prevStep,
    updateField, 
    registerVehicle,
    resetForm 
  } = useVehicleForm();

  const renderScreen = () => {
    if (step === 0) {
      return (
        <VehicleStep1Screen
          vehicle={vehicle}
          onChange={updateField}
          onNext={nextStep}
        />
      );
    }
    if (step === 1) {
      return (
        <VehicleStep2Screen
          vehicle={vehicle}
          onChange={updateField}
          onNext={nextStep}
          onBack={prevStep}
        />
      );
    }
    if (step === 2) {
      return (
        <SummaryScreen
          vehicle={vehicle}
          onRegister={registerVehicle}
          onBack={prevStep}
        />
      );
    }
    return (
      <RegisteredVehiclesScreen
        vehicles={registeredVehicles}
        onRegisterAnother={resetForm}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.safeArea}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <Text style={styles.title}>Sistema de Registro de Vehículos</Text>
          {step < TOTAL_STEPS && (
            <Text style={styles.steps}>Paso {step + 1} de {TOTAL_STEPS}</Text>
          )}
          {step === TOTAL_STEPS && (
            <Text style={styles.steps}>Vehículos Registrados ({registeredVehicles.length})</Text>
          )}
          <View style={styles.card}>
            {renderScreen()}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fef3c7',
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#92400e',
  },
  steps: {
    fontSize: 14,
    color: '#78350f',
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: '#fbbf24',
  },
});
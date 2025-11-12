import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function ParentDashboard() {
  const router = useRouter();
  const [childInfo] = useState({
    name: 'Sofia',
    group: 'Grupo A',
    schedule: '8:00 AM - 2:00 PM',
    location: 'En la escuela'
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Dashboard de Padre</Text>
          <Text style={styles.headerSubtitle}>Monitoreo en tiempo real</Text>
        </View>
      </View>

      {/* Mapa en tiempo real */}

      {/* Botón Ver Alertas */}
      <TouchableOpacity style={styles.alertButtonContainer} onPress={() => router.push('/(home)/alerts')}>
        <LinearGradient
          colors={['#3b82f6', '#8b5cf6']}
          style={styles.alertButton}
        >
          <Text style={styles.alertButtonText}>🔔 Ver Alertas</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Panel de información del niño */}
      <View style={styles.infoCard}>
        <Text style={styles.infoCardTitle}>Información del Niño</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nombre:</Text>
          <Text style={styles.infoValue}>{childInfo.name}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Estado:</Text>
          <View style={styles.statusBadge}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Activo</Text>
          </View>
        </View>
      </View>

      {/* Actividad reciente */}
      <View style={styles.activityCard}>
        <Text style={styles.activityTitle}>Actividad Reciente</Text>
        
        <View style={styles.activityItem}>
          <View style={styles.activityIcon}>
            <Text style={styles.activityIconText}>✓</Text>
          </View>
          <View style={styles.activityContent}>
            <Text style={styles.activityText}>Entrada registrada</Text>
            <Text style={styles.activityTime}>8:05 AM</Text>
          </View>
        </View>

        <View style={styles.activityItem}>
          <View style={styles.activityIcon}>
            <Text style={styles.activityIconText}>📍</Text>
          </View>
          <View style={styles.activityContent}>
            <Text style={styles.activityText}>Ubicación actualizada</Text>
            <Text style={styles.activityTime}>8:10 AM</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  mapContainer: {
    margin: 20,
    marginBottom: 15,
  },
  mapPlaceholder: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 250,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  mapPlaceholderText: {
    fontSize: 48,
    marginBottom: 10,
  },
  mapText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  mapSubtext: {
    fontSize: 14,
    color: '#888',
    marginBottom: 15,
  },
  locationBadge: {
    backgroundColor: '#eef2ff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3b82f6',
  },
  locationText: {
    color: '#3b82f6',
    fontWeight: '600',
    fontSize: 14,
  },
  alertButtonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  alertButton: {
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  alertButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#86efac',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22c55e',
    marginRight: 6,
  },
  statusText: {
    color: '#16a34a',
    fontWeight: '600',
    fontSize: 14,
  },
  activityCard: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 40,
  },
  activityTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eef2ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  activityIconText: {
    fontSize: 18,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  activityTime: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
});

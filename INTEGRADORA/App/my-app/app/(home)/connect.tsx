import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ConnectScreen() {
  const connectedDevice = {
    name: 'Pulsera SafeTrack',
    type: 'Pulsera',
    battery: 85,
    status: 'Conectado',
    lastSync: 'Hace 5 min',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dispositivos Conectados</Text>
      
      <View style={styles.deviceCard}>
        <View style={styles.deviceHeader}>
          <Ionicons name="watch" size={32} color="#3b82f6" />
          <View style={styles.deviceInfo}>
            <Text style={styles.deviceName}>{connectedDevice.name}</Text>
            <Text style={styles.deviceType}>{connectedDevice.type}</Text>
          </View>
          <View style={[styles.statusBadge, connectedDevice.status === 'Conectado' && styles.connectedBadge]}>
            <Text style={styles.statusText}>{connectedDevice.status}</Text>
          </View>
        </View>
        
        <View style={styles.deviceDetails}>
          <View style={styles.detailItem}>
            <Ionicons name="battery-charging" size={20} color="#10b981" />
            <Text style={styles.detailText}>{connectedDevice.battery}%</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="time-outline" size={20} color="#6b7280" />
            <Text style={styles.detailText}>{connectedDevice.lastSync}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.helpSection}>
        <Ionicons name="help-circle-outline" size={20} color="#3b82f6" />
        <Text style={styles.helpText}>¿Necesitas ayuda con la conexión?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 20,
  },
  deviceCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  deviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  deviceInfo: {
    marginLeft: 12,
    flex: 1,
  },
  deviceName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  deviceType: {
    fontSize: 14,
    color: '#6b7280',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
  },
  connectedBadge: {
    backgroundColor: '#dbeafe',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1e40af',
  },
  deviceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    paddingTop: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    marginLeft: 6,
    color: '#4b5563',
    fontSize: 14,
  },
  helpSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#eff6ff',
    borderRadius: 8,
  },
  helpText: {
    color: '#3b82f6',
    marginLeft: 8,
    fontWeight: '500',
  },
});

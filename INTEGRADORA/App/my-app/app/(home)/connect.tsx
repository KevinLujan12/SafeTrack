import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function ConnectScreen() {
  const router = useRouter();
  const [device, setDevice] = useState({
    name: 'Pulsera de Sofia',
    childName: 'Sofia',
    type: 'Pulsera',
    battery: 85,
    status: 'Conectado',
    lastSync: 'Hace 5 min',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(device.name);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Dispositivos Conectados</Text>
      </View>
      
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Agregar dispositivo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryBtn} onPress={() => setIsEditing((v) => !v)}>
          <Text style={styles.secondaryBtnText}>{isEditing ? 'Cancelar' : 'Modificar'}</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.deviceCard}>
        <View style={styles.deviceHeader}>
          <Ionicons name="watch" size={32} color="#3b82f6" />
          <View style={styles.deviceInfo}>
            {!isEditing ? (
              <Text style={styles.deviceName}>{device.name}</Text>
            ) : (
              <View style={styles.editRow}>
                <TextInput
                  style={styles.input}
                  value={tempName}
                  onChangeText={setTempName}
                />
                <TouchableOpacity
                  style={styles.saveBtn}
                  onPress={() => {
                    setDevice((d) => ({ ...d, name: tempName.trim() || d.name }));
                    setIsEditing(false);
                  }}
                >
                  <Text style={styles.saveBtnText}>Guardar</Text>
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.deviceType}>{device.type}</Text>
            <Text style={styles.deviceMeta}>Nombre del niño: {device.childName}</Text>
          </View>
          <View style={[styles.statusBadge, device.status === 'Conectado' && styles.connectedBadge]}>
            <Text style={styles.statusText}>{device.status}</Text>
          </View>
        </View>
        
        <View style={styles.deviceDetails}>
          <View style={styles.detailItem}>
            <Ionicons name="battery-charging" size={20} color="#10b981" />
            <Text style={styles.detailText}>{device.battery}%</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="time-outline" size={20} color="#6b7280" />
            <Text style={styles.detailText}>{device.lastSync}</Text>
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
    alignItems: 'stretch',
  },
  headerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 0,
  },
  homeButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#eef2ff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dbeafe',
  },
  homeButtonText: {
    color: '#3b82f6',
    fontWeight: '600',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  primaryBtn: {
    backgroundColor: '#3b82f6',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  primaryBtnText: {
    color: '#fff',
    fontWeight: '700',
  },
  secondaryBtn: {
    backgroundColor: '#e5e7eb',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  secondaryBtnText: {
    color: '#111827',
    fontWeight: '700',
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
  editRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  saveBtn: {
    backgroundColor: '#10b981',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  saveBtnText: {
    color: '#fff',
    fontWeight: '700',
  },
  deviceType: {
    fontSize: 14,
    color: '#6b7280',
  },
  deviceMeta: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 2,
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

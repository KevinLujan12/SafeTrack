import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

interface Student {
  id: string;
  name: string;
  group: string;
  status: 'active' | 'inactive';
  braceletStatus: 'normal' | 'low' | 'alert';
}

export default function SchoolDashboard() {
  const [students] = useState<Student[]>([
    { id: '1', name: 'Juan Pérez', group: 'Grupo A', status: 'active', braceletStatus: 'normal' },
    { id: '2', name: 'María García', group: 'Grupo A', status: 'active', braceletStatus: 'normal' },
    { id: '3', name: 'Carlos López', group: 'Grupo B', status: 'active', braceletStatus: 'low' },
    { id: '4', name: 'Ana Martínez', group: 'Grupo B', status: 'inactive', braceletStatus: 'normal' },
    { id: '5', name: 'Luis Rodríguez', group: 'Grupo C', status: 'active', braceletStatus: 'alert' },
  ]);

  const [alerts] = useState([
    { id: '1', type: 'warning', message: 'Pulsera con batería baja - Carlos López', time: '10:30 AM' },
    { id: '2', type: 'alert', message: 'Alerta de ubicación - Luis Rodríguez', time: '10:15 AM' },
  ]);

  const getBraceletStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return '#22c55e';
      case 'low': return '#f59e0b';
      case 'alert': return '#ef4444';
      default: return '#888';
    }
  };

  const getBraceletStatusText = (status: string) => {
    switch (status) {
      case 'normal': return 'Normal';
      case 'low': return 'Batería baja';
      case 'alert': return 'Alerta';
      default: return 'Desconocido';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard de Escuela</Text>
        <Text style={styles.headerSubtitle}>Panel de administración</Text>
      </View>

      {/* Alertas activas */}
      <View style={styles.alertsSection}>
        <Text style={styles.sectionTitle}>Alertas Activas</Text>
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <View key={alert.id} style={styles.alertCard}>
              <View style={styles.alertIcon}>
                <Text style={styles.alertIconText}>⚠️</Text>
              </View>
              <View style={styles.alertContent}>
                <Text style={styles.alertMessage}>{alert.message}</Text>
                <Text style={styles.alertTime}>{alert.time}</Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.noAlertsCard}>
            <Text style={styles.noAlertsText}>No hay alertas activas</Text>
          </View>
        )}
      </View>

      {/* Lista de alumnos registrados */}
      <View style={styles.studentsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Lista de Alumnos Registrados</Text>
          <View style={styles.studentCount}>
            <Text style={styles.studentCountText}>{students.length}</Text>
          </View>
        </View>

        {students.map((student) => (
          <View key={student.id} style={styles.studentCard}>
            <View style={styles.studentInfo}>
              <View style={styles.studentAvatar}>
                <Text style={styles.studentAvatarText}>
                  {student.name.split(' ').map(n => n[0]).join('')}
                </Text>
              </View>
              <View style={styles.studentDetails}>
                <Text style={styles.studentName}>{student.name}</Text>
                <Text style={styles.studentGroup}>{student.group}</Text>
              </View>
            </View>
            
            <View style={styles.studentStatus}>
              <View style={[
                styles.statusIndicator,
                { backgroundColor: student.status === 'active' ? '#f0fdf4' : '#fef2f2' }
              ]}>
                <View style={[
                  styles.statusDot,
                  { backgroundColor: student.status === 'active' ? '#22c55e' : '#ef4444' }
                ]} />
                <Text style={[
                  styles.statusLabel,
                  { color: student.status === 'active' ? '#16a34a' : '#dc2626' }
                ]}>
                  {student.status === 'active' ? 'Activo' : 'Inactivo'}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Estado de las pulseras */}
      <View style={styles.braceletsSection}>
        <Text style={styles.sectionTitle}>Estado de las Pulseras</Text>
        
        {students.map((student) => (
          <View key={student.id} style={styles.braceletCard}>
            <View style={styles.braceletInfo}>
              <Text style={styles.braceletName}>{student.name}</Text>
              <Text style={styles.braceletGroup}>{student.group}</Text>
            </View>
            
            <View style={[
              styles.braceletStatus,
              { backgroundColor: `${getBraceletStatusColor(student.braceletStatus)}20` }
            ]}>
              <View style={[
                styles.braceletStatusDot,
                { backgroundColor: getBraceletStatusColor(student.braceletStatus) }
              ]} />
              <Text style={[
                styles.braceletStatusText,
                { color: getBraceletStatusColor(student.braceletStatus) }
              ]}>
                {getBraceletStatusText(student.braceletStatus)}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Estadísticas rápidas */}
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Estadísticas</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{students.filter(s => s.status === 'active').length}</Text>
            <Text style={styles.statLabel}>Alumnos Activos</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{alerts.length}</Text>
            <Text style={styles.statLabel}>Alertas Hoy</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{students.filter(s => s.braceletStatus === 'normal').length}</Text>
            <Text style={styles.statLabel}>Pulseras OK</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{students.filter(s => s.braceletStatus !== 'normal').length}</Text>
            <Text style={styles.statLabel}>Requieren Atención</Text>
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
  alertsSection: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  alertCard: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fee2e2',
    backgroundColor: '#fef2f2',
  },
  alertIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fee2e2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  alertIconText: {
    fontSize: 20,
  },
  alertContent: {
    flex: 1,
  },
  alertMessage: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  alertTime: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
  noAlertsCard: {
    backgroundColor: '#f0fdf4',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#86efac',
  },
  noAlertsText: {
    color: '#16a34a',
    fontSize: 16,
    fontWeight: '500',
  },
  studentsSection: {
    margin: 20,
    marginTop: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  studentCount: {
    backgroundColor: '#eef2ff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#3b82f6',
  },
  studentCountText: {
    color: '#3b82f6',
    fontWeight: 'bold',
    fontSize: 14,
  },
  studentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  studentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  studentAvatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#eef2ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  studentAvatarText: {
    color: '#3b82f6',
    fontWeight: 'bold',
    fontSize: 16,
  },
  studentDetails: {
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  studentGroup: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  studentStatus: {
    marginLeft: 10,
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  braceletsSection: {
    margin: 20,
    marginTop: 0,
  },
  braceletCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  braceletInfo: {
    flex: 1,
  },
  braceletName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  braceletGroup: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  braceletStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  braceletStatusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  braceletStatusText: {
    fontSize: 13,
    fontWeight: '600',
  },
  statsSection: {
    margin: 20,
    marginTop: 0,
    marginBottom: 40,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
  },
});

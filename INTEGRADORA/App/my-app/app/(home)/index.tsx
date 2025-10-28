import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  // Ejemplo de datos de usuario y estadísticas
  const user = {
    name: 'Kevin Luján',
    role: 'Padre',
    child: 'Sofía',
  };

  const stats = {
    pasosHoy: 7345,
    distanciaKm: 5.2,
    alertas: 1,
    zonasSeguras: 3,
    ultimaUbicacion: 'Parque Central',
    ultimaActividad: 'Entrada a la escuela',
    horaUltimaActividad: '07:42 AM',
  };

  return (
    <ScrollView style={styles.container}>
      {/* Encabezado de usuario */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.welcomeTitle}>Hola, {user.name}</Text>
          <Text style={styles.welcomeSubtitle}>{user.role} de {user.child}</Text>
        </View>
      </View>

      {/* Tarjeta de estado y acción rápida */}
      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>Estado de hoy</Text>
        <Text style={styles.statusSubtitle}>Última actividad: {stats.ultimaActividad} • {stats.horaUltimaActividad}</Text>
        <View style={styles.quickButtons}>
          <TouchableOpacity>
            <LinearGradient colors={['#3b82f6', '#8b5cf6']} style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Ver mapa</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.secondaryLink}>Historial</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Estadísticas rápidas */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Pasos (hoy)</Text>
          <Text style={styles.statValue}>{stats.pasosHoy.toLocaleString()}</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Distancia (km)</Text>
          <Text style={styles.statValue}>{stats.distanciaKm.toFixed(1)}</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Alertas</Text>
          <Text style={[styles.statValue, stats.alertas > 0 && styles.alertValue]}>{stats.alertas}</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Zonas seguras</Text>
          <Text style={styles.statValue}>{stats.zonasSeguras}</Text>
        </View>
      </View>

      {/* Sección de actividad reciente */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actividad reciente</Text>
        <View style={styles.activityItem}>
          <View style={styles.activityDot} />
          <View style={styles.activityTextWrap}>
            <Text style={styles.activityText}>Salida de casa</Text>
            <Text style={styles.activitySubtext}>07:15 AM</Text>
          </View>
        </View>
        <View style={styles.activityItem}>
          <View style={[styles.activityDot, { backgroundColor: '#10b981' }]} />
          <View style={styles.activityTextWrap}>
            <Text style={styles.activityText}>Entrada a la escuela</Text>
            <Text style={styles.activitySubtext}>07:42 AM</Text>
          </View>
        </View>
        <View style={styles.activityItem}>
          <View style={[styles.activityDot, { backgroundColor: '#f59e0b' }]} />
          <View style={styles.activityTextWrap}>
            <Text style={styles.activityText}>Salida de la escuela</Text>
            <Text style={styles.activitySubtext}>01:30 PM</Text>
          </View>
        </View>
      </View>

      {/* Sección de ubicación */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ubicación</Text>
        <View style={styles.locationCard}>
          <Text style={styles.locationPlace}>{stats.ultimaUbicacion}</Text>
          <Text style={styles.locationHint}>Actualizado hace 5 min</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#e0e7ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  headerText: {
    flex: 1,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  statusCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 6,
  },
  statusSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  quickButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  secondaryLink: {
    color: '#3b82f6',
    fontWeight: '600',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 6,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  alertValue: {
    color: '#ef4444',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 10,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  activityDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3b82f6',
    marginRight: 10,
  },
  activityTextWrap: {
    flex: 1,
  },
  activityText: {
    fontSize: 16,
    color: '#111827',
  },
  activitySubtext: {
    fontSize: 12,
    color: '#6b7280',
  },
  locationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  locationPlace: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  locationHint: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
});

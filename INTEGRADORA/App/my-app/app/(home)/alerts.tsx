import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Alert = {
  id: string;
  type: 'info' | 'warning' | 'danger';
  title: string;
  message: string;
  time: string;
  read: boolean;
};

export default function AlertsScreen() {
  // Sample alerts data
  const alerts: Alert[] = [
    {
      id: '1',
      type: 'warning',
      title: '¡Cuidado!',
      message: 'Tu hijo ha salido de la zona segura designada.',
      time: 'Hace 5 min',
      read: false,
    },
    {
      id: '2',
      type: 'info',
      title: 'Actualización',
      message: 'Nueva actualización disponible para la aplicación.',
      time: 'Hace 2 horas',
      read: true,
    },
    {
      id: '3',
      type: 'danger',
      title: '¡Alerta!',
      message: 'Se ha detectado movimiento inusual en el dispositivo.',
      time: 'Ayer',
      read: true,
    },
  ];

  const getIconName = (type: string) => {
    switch (type) {
      case 'warning':
        return 'warning';
      case 'danger':
        return 'alert-circle';
      default:
        return 'information-circle';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'warning':
        return '#f59e0b';
      case 'danger':
        return '#ef4444';
      default:
        return '#3b82f6';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Alertas</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {alerts.map((alert) => (
          <View 
            key={alert.id} 
            style={[
              styles.alertCard,
              !alert.read && styles.unreadAlert,
              { borderLeftColor: getIconColor(alert.type) }
            ]}
          >
            <View style={styles.alertHeader}>
              <View style={styles.alertTitleContainer}>
                <Ionicons 
                  name={getIconName(alert.type) as any} 
                  size={20} 
                  color={getIconColor(alert.type)} 
                  style={styles.alertIcon}
                />
                <Text style={styles.alertTitle}>{alert.title}</Text>
              </View>
              <Text style={styles.alertTime}>{alert.time}</Text>
            </View>
            <Text style={styles.alertMessage}>{alert.message}</Text>
            {!alert.read && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadBadgeText}>Nuevo</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  scrollView: {
    flex: 1,
    padding: 15,
  },
  alertCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderLeftWidth: 4,
  },
  unreadAlert: {
    borderLeftWidth: 6,
  },
  alertHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  alertTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alertIcon: {
    marginRight: 8,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  alertTime: {
    fontSize: 12,
    color: '#9ca3af',
  },
  alertMessage: {
    color: '#4b5563',
    lineHeight: 20,
  },
  unreadBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  unreadBadgeText: {
    color: '#92400e',
    fontSize: 12,
    fontWeight: '600',
  },
});

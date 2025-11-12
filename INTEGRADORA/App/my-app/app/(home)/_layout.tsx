import { Drawer } from 'expo-router/drawer';
import { CustomDrawerContent } from '@/components/CustomDrawerContent';
import { Ionicons } from '@expo/vector-icons';

export default function HomeLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ 
        drawerStyle: { backgroundColor: '#f5f5f5', width: 240 },
        drawerActiveTintColor: '#3b82f6',
        drawerInactiveTintColor: '#6b7280',
        drawerLabelStyle: { fontWeight: '600', fontSize: 15 },
      }}
    >
      <Drawer.Screen name="index" options={{ title: 'Home' }} />
      <Drawer.Screen name="parent-dashboard" options={{ title: 'Dashboard Padre' }} />
      <Drawer.Screen name="ubicacion" options={{ title: 'Ubicacion' }} />
      <Drawer.Screen name="connect" options={{ title: 'Dispositivos' }} />
      <Drawer.Screen name="alerts" options={{ title: 'Alertas'}}/>
      <Drawer.Screen name="analytics" options={{ title: 'Analytics' }} />
    </Drawer>
  );
}

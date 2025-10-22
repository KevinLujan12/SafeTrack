import { Drawer } from 'expo-router/drawer';
import { CustomDrawerContent } from '@/components/CustomDrawerContent';

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
      <Drawer.Screen name="school-dashboard" options={{ title: 'Dashboard Escuela' }} />
      <Drawer.Screen name="clients" options={{ title: 'Clients' }} />
      <Drawer.Screen name="engage" options={{ title: 'Engage' }} />
      <Drawer.Screen name="payments" options={{ title: 'Payments' }} />
      <Drawer.Screen name="transactions" options={{ title: 'Transactions' }} />
      <Drawer.Screen name="inventory" options={{ title: 'Inventory' }} />
      <Drawer.Screen name="lead-genius" options={{ title: 'Lead Genius' }} />
      <Drawer.Screen name="sourcing" options={{ title: 'Sourcing' }} />
      <Drawer.Screen name="connect" options={{ title: 'Connect' }} />
      <Drawer.Screen name="analytics" options={{ title: 'Analytics' }} />
    </Drawer>
  );
}

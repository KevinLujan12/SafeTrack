import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const router = useRouter();

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: '#f5f5f5' }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SafeTrack Kids</Text>
      </View>
      <DrawerItemList {...props} />
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.replace('/login')} style={styles.signOutButton}>
          <Text style={styles.signOutText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  signOutButton: {
    paddingVertical: 10,
  },
  signOutText: {
    fontSize: 16,
    color: '#ef4444',
    fontWeight: '600',
  },
});

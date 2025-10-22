import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  const [userType, setUserType] = useState<'parent' | 'school' | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SafeTrack Kids</Text>
      
      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>Iniciar Sesión</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <View style={styles.userTypeContainer}>
          <Text style={styles.userTypeLabel}>¿Eres padre o escuela?</Text>
          <View style={styles.userTypeButtons}>
            <TouchableOpacity
              style={[
                styles.userTypeButton,
                userType === 'parent' && styles.userTypeButtonActive
              ]}
              onPress={() => setUserType('parent')}
            >
              <Text style={[
                styles.userTypeButtonText,
                userType === 'parent' && styles.userTypeButtonTextActive
              ]}>Padre</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.userTypeButton,
                userType === 'school' && styles.userTypeButtonActive
              ]}
              onPress={() => setUserType('school')}
            >
              <Text style={[
                styles.userTypeButtonText,
                userType === 'school' && styles.userTypeButtonTextActive
              ]}>Escuela</Text>
            </TouchableOpacity>
          </View>
        </View>

        {userType ? (
          <Link
            href={userType === 'parent' ? '/(home)/parent-dashboard' : '/(home)/school-dashboard'}
            asChild
          >
            <TouchableOpacity style={styles.buttonWrapper}>
              <LinearGradient
                colors={['#3b82f6', '#8b5cf6']}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Link>
        ) : (
          <TouchableOpacity disabled style={styles.buttonWrapper}>
            <LinearGradient
              colors={['#ccc', '#999']}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  userTypeContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  userTypeLabel: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
    fontWeight: '500',
  },
  userTypeButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  userTypeButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  userTypeButtonActive: {
    borderColor: '#3b82f6',
    backgroundColor: '#eef2ff',
  },
  userTypeButtonText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  userTypeButtonTextActive: {
    color: '#3b82f6',
  },
  buttonWrapper: {
    width: '100%',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

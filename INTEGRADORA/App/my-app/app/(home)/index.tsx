import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeTitle}>Welcome to SafeTrack Kids, Kevin!</Text>
      <Text style={styles.welcomeSubtitle}>Complete the checklist to get your store up and running.</Text>

      <View style={styles.trialCard}>
        <Text style={styles.trialText}>Your SafeTrack Kids trial is expiring in 30 days.</Text>
        <Text style={styles.trialSubtext}>Choose a plan to continue using SafeTrack Kids to manage your store.</Text>
        <View style={styles.trialButtons}>
          <TouchableOpacity>
            <LinearGradient colors={['#3b82f6', '#8b5cf6']} style={styles.upgradeButton}>
              <Text style={styles.upgradeButtonText}>Upgrade now</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.demoText}>Request a demo</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.gettingStartedCard}>
        <View style={styles.gettingStartedHeader}>
          <Text style={styles.gettingStartedTitle}>Getting started</Text>
          <Text style={styles.steps}>1/4 steps completed</Text>
        </View>
        <View style={styles.progressBar}>
          <LinearGradient colors={['#3b82f6', '#8b5cf6']} style={styles.progress} />
        </View>
        <TouchableOpacity>
          <LinearGradient colors={['#3b82f6', '#8b5cf6']} style={styles.onboardingButton}>
            <Text style={styles.onboardingButtonText}>Schedule my onboarding call</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Inventory Value</Text>
          <Text style={styles.statValue}>-</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Month to Date Gross Profit</Text>
          <Text style={styles.statValue}>-</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Projected Gross Profit</Text>
          <Text style={styles.statValue}>-</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Accounts Receivable</Text>
          <Text style={styles.statValue}>-</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Accounts Payable</Text>
          <Text style={styles.statValue}>-</Text>
        </View>
      </View>

      <View style={styles.tasksSection}>
        <Text style={styles.tasksTitle}>Your tasks</Text>
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
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  trialCard: {
    backgroundColor: '#eef2ff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  trialText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  trialSubtext: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
    marginBottom: 15,
  },
  trialButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upgradeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 15,
  },
  upgradeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  demoText: {
    color: '#3b82f6',
    fontWeight: 'bold',
  },
  gettingStartedCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
  },
  gettingStartedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  gettingStartedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  steps: {
    fontSize: 14,
    color: '#888',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 15,
    overflow: 'hidden',
  },
  progress: {
    width: '25%',
    height: '100%',
    borderRadius: 5,
  },
  onboardingButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  onboardingButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
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
    color: '#888',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  tasksSection: {
    marginBottom: 40,
  },
  tasksTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

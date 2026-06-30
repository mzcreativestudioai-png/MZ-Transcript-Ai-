import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// --- MZ Transcript AI - Home Dashboard (Phone Preview) ---
export default function App() {
  const features = [
    { id: 1, name: '🎤 Transcribe', color: '#3B82F6' },
    { id: 2, name: '🌐 Translate', color: '#06B6D4' },
    { id: 3, name: '📝 Summarize', color: '#FBBF24' },
    { id: 4, name: '🔊 Voice', color: '#8B5CF6' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>MZ Transcript AI</Text>
            <Text style={styles.greeting}>Welcome Back, ZMA</Text>
          </View>
          <View style={styles.avatarPlaceholder} />
        </View>

        {/* Credit Widget (Glassmorphism) */}
        <View style={styles.creditWidget}>
          <View>
            <Text style={styles.creditLabel}>💎 Available Credits</Text>
            <Text style={styles.creditAmount}>120</Text>
          </View>
          <View style={styles.planBadge}>
            <Text style={styles.planText}>Pro Plan</Text>
          </View>
        </View>

        {/* Quick Actions Grid */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.grid}>
          {features.map((item) => (
            <TouchableOpacity key={item.id} style={[styles.gridCard, { borderColor: item.color }]}>
              <Text style={styles.gridIcon}>{item.name.split(' ')[0]}</Text>
              <Text style={styles.gridText}>{item.name.split(' ')[1]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.glassCard}>
          <View style={styles.activityItem}>
            <Text style={styles.activityName}>Project_Meeting.mp3</Text>
            <Text style={styles.activityStatus}>✅ Completed</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.activityItem}>
            <Text style={styles.activityName}>Interview_Eng.m4a</Text>
            <Text style={styles.activityStatus}>⏳ Processing</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>CREATE · INNOVATE · INSPIRE</Text>
          <Text style={styles.developer}>Developer by ZMA</Text>
          <Text style={styles.copyright}>© 2026 MZ Creative Studio</Text>
        </View>

      </ScrollView>

      {/* Bottom Navigation (Simulated) */}
      <View style={styles.bottomNav}>
        <Text style={styles.navActive}>🏠 Home</Text>
        <Text style={styles.navInactive}>📜 History</Text>
        <View style={styles.floatingButton}>
          <Text style={styles.floatingText}>✨ +</Text>
        </View>
        <Text style={styles.navInactive}>💎 Credits</Text>
        <Text style={styles.navInactive}>👤 Profile</Text>
      </View>
    </SafeAreaView>
  );
}

// --- Styles (Dark Theme + Glassmorphism) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  brand: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },
  greeting: {
    color: '#CBD5E1',
    fontSize: 14,
    marginTop: 2,
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  creditWidget: {
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.3)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  creditLabel: {
    color: '#CBD5E1',
    fontSize: 12,
  },
  creditAmount: {
    color: '#FBBF24',
    fontSize: 28,
    fontWeight: '700',
  },
  planBadge: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  planText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  gridCard: {
    width: '48%',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#3B82F6',
  },
  gridIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  gridText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  glassCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    marginBottom: 24,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  activityName: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  activityStatus: {
    color: '#06B6D4',
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginVertical: 4,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.05)',
    marginBottom: 80,
  },
  footerText: {
    color: '#FBBF24',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 2,
  },
  developer: {
    color: '#64748B',
    fontSize: 10,
    marginTop: 4,
  },
  copyright: {
    color: '#334155',
    fontSize: 9,
    marginTop: 2,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1E293B',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  navActive: {
    color: '#3B82F6',
    fontSize: 12,
    fontWeight: '600',
  },
  navInactive: {
    color: '#64748B',
    fontSize: 12,
  },
  floatingButton: {
    backgroundColor: '#FBBF24',
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    shadowColor: '#FBBF24',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  floatingText: {
    color: '#0F172A',
    fontSize: 24,
    fontWeight: '700',
  },
});

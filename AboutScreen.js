import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Student Name:</Text>
        <Text style={styles.value}>Khachaturyan Tigran</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Student ID:</Text>
        <Text style={styles.value}>101498001</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  infoContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});


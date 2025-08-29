import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>
        Typescript is great if you practice more
      </Text>
      <Text style={styles.mediumText}>
        React Native provides you a single codebase for cross platforms
      </Text>
      <Text style={styles.smallText}>
        ALX is awesome
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mediumText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  smallText: {
    fontSize: 14,
    fontWeight: '400',
  },
});

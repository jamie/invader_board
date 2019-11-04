import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fear from './components/Fear'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Fear players={4}/>
    </View>
  );
}

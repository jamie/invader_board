import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 60,
  },
});

export default function Scenario(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Scenario</Text>
    </View>
  );
}

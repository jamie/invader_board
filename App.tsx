import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Adversary from './components/Adversary'
import Blight from './components/Blight'
import Events from './components/Events'
import Fear from './components/Fear'
import FearCards from './components/FearCards'
import Invaders from './components/Invaders'
import PhaseTracker from './components/PhaseTracker'
import Scenario from './components/Scenario'
import Terror from './components/Terror'

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
      <Scenario />
      <Adversary />
      <Events />
      <Terror />
      <FearCards />
      <Blight />
      <Invaders />
      <Fear players={4}/>
      <PhaseTracker />
    </View>
  );
}

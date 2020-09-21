import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Adversary from './components/Adversary'
import Blight from './components/Blight'
import BlightCard from './components/BlightCard'
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
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  row: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  shortrow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Scenario />
        <Adversary />
      </View>
      <View style={styles.shortrow}>
        <Terror />
        <Fear players={4} />
        <Blight />
      </View>
      <View style={styles.row}>
        <Events />
        <FearCards />
        <BlightCard />
      </View>
      <View style={styles.row}>
        <Invaders />
      </View>
      <View style={styles.row}>
        <PhaseTracker />
      </View>
    </View>
  );
}

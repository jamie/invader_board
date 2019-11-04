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
  value: {
    fontSize: 30,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  red: { backgroundColor: 'tomato' },
  blue: { backgroundColor: 'skyblue' },
});

export default function Fear(props) {
  const [fear, setFear] = useState(0)
  const fearThreshold = props.players * 4

  const addFear = () => {
    let newFear = fear
    newFear += 1
    if (newFear >= fearThreshold) {
      newFear -= fearThreshold
      // TODO: FearCard get
    }
    setFear(newFear)
  }
  const subFear = () => {
    let newFear = fear
    if (fear <= 0) {
      newFear += fearThreshold
      // TODO: FearCard underflow
    }
    newFear -= 1
    setFear(newFear)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fear</Text>
      <View style={styles.buttons}>
        <View style={[styles.button, styles.red]}>
          <Button
            onPress={subFear}
            title="-"
          />
        </View>
        <View style={[styles.button, styles.blue]}>
          <Button
            onPress={addFear}
            title="+"
          />
        </View>
      </View>
      <Text style={styles.value}>{fear} / {fearThreshold}</Text>
    </View>
  );
}

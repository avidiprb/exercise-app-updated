import React, { useState } from 'react';
import {View, Text} from 'react-native';

export default function RepetitionExerciseScreen() {
    let [reps, setReps] = useState(0);
  
    const parm = "Push Ups";
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{parm}</Text>
        <Text>Reps: {reps}</Text>
        <Text>{(reps) < 20 ? 'You can do this!' : 'Great job! Stop anytime if you do not have the energy!'}</Text>
        <button onClick={() => setReps(reps++)}>Complete Rep</button>
        <button onClick={() => setReps(0)}>Reset</button>
      </View>
    );
  }
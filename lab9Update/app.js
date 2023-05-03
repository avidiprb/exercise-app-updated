import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import DurationExercise from './DurationExercise.jsx';
import HomeScreen from './HomeScreen.jsx';
import TimerScreen from './TimerScreen.jsx';
import RepetitionExerciseScreen from './RepetitionExerciseScreen.jsx';
import LapScreen from './LapScreen.jsx';
const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Timer" component={TimerScreen} />
          <Stack.Screen name="RepetitionExercise" component={RepetitionExerciseScreen} />
          <Stack.Screen name="Lap" component={LapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default App;


// The following line HAS to be used first!
//import 'react-native-gesture-handler';
/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen.jsx';
import { SettingsScreen } from './SettingsScreen.jsx';

// The first thing we do is create a collection
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/
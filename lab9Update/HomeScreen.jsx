import React from 'react';
import {View, Text, Button} from 'react-native';
import { FlatList} from "react-native";

//import DurationExercise from './DurationExercise.jsx';

/*export default function HomeScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Duration Exercise"
            onPress={() => props.navigation.navigate('Timer')}
          />
          <Button
            title="Repetition Exercise"
            onPress={() => props.navigation.navigate('RepetitionExercise')}
          />
          <Button
            title="Running Exercise"
            onPress={() => props.navigation.navigate('Lap')}
          />
        </View>
      );
    }*/

    export default function HomeScreen (props) {

    const buttons = [
      {
      id: '1',
      title: 'Duration Exercise',
      path: 'Timer',
      },
      {
      id: '2',
      title: 'Repetition Exercise',
      path: 'RepetitionExercise',
      },
      {
      id: '3',
      title: 'Running Exercise',
      path: 'Lap'
      }
      ];

      const Item = ({ title, path }) => (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Button
            title={title}
            onPress={() => props.navigation.navigate(path)}
          />
        </View>
      );

      const renderItem = ({item})=>(
        <Item title={item.title} path={item.path} />
        );
        return (
        <View >
        <FlatList
        data={buttons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        /></View>
        );
    }


    /*/import React from 'react';
    import {View, Text, Button} from 'react-native';*/

    /*
       Becasue this uses React Navigation, there is an additional
        property named 'navigation' passed to each
        component.
    */
    
    /*export function HomeScreen(props) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Settings"
            onPress={() => props.navigation.navigate('Settings')}
          />
        </View>
      );
    }*/
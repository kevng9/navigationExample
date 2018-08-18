import React, {Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Home from './src/Home';
import Homework from './src/Homework';
import Timetable from './src/Timetable';
import ToDo from './src/ToDo';


const RootNavigator = createStackNavigator({
  Home:{screen:Home},
  Homework:{screen:Homework},
  Timetable:{screen:Timetable},
  ToDo:{screen:ToDo},
})

export default class App extends Component{
  render(){
    return <RootNavigator/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

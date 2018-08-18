import React, {Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import Home from './src/Home';
import Homework from './src/Homework';
import Timetable from './src/Timetable';
import ToDo from './src/ToDo';
import HomeworkTab from './src/HomeworkTab';

const RootNavigator = createStackNavigator({
  Home:{screen:Home},
  Homework:{screen:HomeworkTab},
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

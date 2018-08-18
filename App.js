import React, {Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createBottomTabNavigator
        ,createDrawerNavigator} from 'react-navigation';

import Home from './src/Home';
import Homework from './src/Homework';
import Timetable from './src/Timetable';
import ToDo from './src/ToDo';
import HomeworkFiles from './src/Homework';
import HomeworkVideo from './src/HomeworkVideo';
import HomeworkSound from './src/HomeworkAudio';

const HomeworkNav = createBottomTabNavigator({
  HomeworkFiles:{screen:HomeworkFiles},
  HomeworkVideo:{screen:HomeworkVideo},
  HomeworkSound:{screen:HomeworkSound},
})

const HomeworkDrawer = createDrawerNavigator({
  Home:{screen:Home},
  HomeworkFiles:{screen:HomeworkFiles},
  HomeworkVideo:{screen:HomeworkVideo},
  HomeworkSound:{screen:HomeworkSound},
})

const RootNavigator = createStackNavigator({
  //Home:{screen:Home},
  HomeworkDrawer:HomeworkDrawer,
  //Homework:{screen:HomeworkTab},
  Homework:HomeworkNav,
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

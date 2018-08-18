import React, { Component } from 'react';
import {
  View,Text,
  StyleSheet,
} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import HomeworkFiles from './Homework'
import HomeworkVideo from './Homework'
import HomeworkSound from './Homework'

const HomeworkNav = createBottomTabNavigator({
  HomeworkFiles:{screen:HomeworkFiles},
  HomeworkVideo:{screen:HomeworkVideo},
  HomeworkSound:{screen:HomeworkSound},
})

export default class HomeworkTab extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions ={
    title: 'Homework folder',
  };

  render(){
    return(
      <HomeworkNav/>
    )
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

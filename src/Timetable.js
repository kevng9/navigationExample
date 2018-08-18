import React, { Component } from 'react';
import {
  View,Text,
  StyleSheet,
} from 'react-native';

export default class Timetable extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions ={
    title: 'Class Timetable',
  };

  render(){
    return(
      <View style={styles.container}>
        <Text>Timetable Screen</Text>
      </View>
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

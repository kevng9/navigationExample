import React, { Component } from 'react';
import {
  View,Text,
  StyleSheet,
} from 'react-native';

export default class ToDo extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions ={
    title: 'To Do List',
  };

  render(){
    return(
      <View style={styles.container}>
        <Text>ToDo Screen</Text>
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

import React, { Component } from 'react';
import {
  View,Text,
  StyleSheet,
} from 'react-native';

export default class Homework extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions ={
    title: 'Homework folder',
  };

  render(){
    return(
      <View style={styles.container}>
        <Text>Homework Screen</Text>
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

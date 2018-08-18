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
    title: 'Documents',
  };

  render(){
    return(
      <View style={styles.container}>
        <Text>List of homework documents here</Text>
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

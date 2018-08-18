import React, { Component } from 'react';
import {
  View,Text,WebView,
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
      <WebView
        source={{uri: 'https://onedrive.live.com/embed?resid=F62FB6A77BB021AD%21119434&authkey=%21AIXJpFsVT1V9ubQ&em=2&wdAllowInteractivity=False&ActiveCell=%27Full%20Courses-NoDots%27!A1&Item=%27Full%20Courses-NoDots%27!Print_Area&wdHideGridlines=True&wdInConfigurator=True'}}
       style={styles.container}/>
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

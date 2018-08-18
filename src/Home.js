import React, { Component } from 'react';
import {
  View,Text,Button,
  StyleSheet,
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions ={
    title: 'Home',
  };

  render(){
    return(
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="To Do List"
          onPress={()=> this.props.navigation.navigate('ToDo')}
        />
        <Button
          title="Homework List"
          onPress={()=> this.props.navigation.navigate('Homework')}
        />
        <Button
          title="Class Timetable"
          onPress={()=> this.props.navigation.navigate('Timetable')}
        />
        <Button
          title="Toggle drawer"
          onPress={()=> this.props.navigation.toggleDrawer()}
        />
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

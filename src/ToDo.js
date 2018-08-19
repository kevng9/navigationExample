import React, { Component } from 'react';
import {
  View,
  StyleSheet,AsyncStorage
} from 'react-native';
import {Container, Content, List, ListItem, Text, Body, Right, CheckBox,
        Form, Item, Input, Button} from 'native-base'

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoObject : [],
      //todoObject : [{key:1, value:'Thing1', done:false},{key:2, value:'Thing2', done:true},{key:3, value:'Thing3', done:false}],
      newTodoItem:''
    }
  }

  static navigationOptions ={
    title: 'To Do List',
  };

  completeItem(key){

  }

  componentWillMount(){
    console.log('loading');
      AsyncStorage.getItem('@MyTodo:todo', (error, todo) =>{
        this.setState({todoObject:JSON.parse(todo)});
      })
  }

  addToDoItem(){
    if(this.state.todoObject.length == 0){
      console.log('array length add:',this.state.todoObject.length);
      var maxKey = 0}
    else {
        var lastIndex = this.state.todoObject.length - 1;
        var maxKey = this.state.todoObject[lastIndex].key;
    }
    console.log(maxKey);
    this.setState(
      {todoObject:this.state.todoObject.concat(
        [{key:maxKey+1, value:this.state.newTodoItem,done:false}]
      )},()=>{AsyncStorage.setItem('@MyTodo:todo', JSON.stringify(this.state.todoObject))}
    );
    this.setState({newTodoItem:''});

    //save todo list to AsyncStorage
  }

  render(){
    return(
      <Container>
        <Content>
          <Form>
            <Item regular>
              <Input
                placeholder='Enter new ToDo item'
                onChangeText={(todoItem)=>{this.setState({newTodoItem:todoItem})}}
                ref = {(input) => {this.todoItemInput = input}}
                value={this.state.newTodoItem}
                />
              <Right>
                <Button
                  onPress={()=>this.addToDoItem()}
                  ><Text>Add</Text></Button>
              </Right>
            </Item>
          </Form>
          <List dataArray={this.state.todoObject}
           renderRow={(item) =>
             <ListItem>
               <Body>
                 <Text>{item.value}</Text>
              </Body>
              <Right>
                <CheckBox checked={item.done}/>
              </Right>
             </ListItem>
           }>
         </List>
        </Content>
      </Container>
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

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Card, Button,Icon} from 'react-native-elements'

import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://source.unsplash.com/random' },
  { id: 2, text: 'Card #2', uri: 'https://source.unsplash.com/random' },
  { id: 3, text: 'Card #3', uri: 'https://source.unsplash.com/random' },
  { id: 4, text: 'Card #4', uri: 'https://source.unsplash.com/random' },
  { id: 5, text: 'Card #5', uri: 'https://source.unsplash.com/random' },
  { id: 6, text: 'Card #6', uri: 'https://source.unsplash.com/random' },
  { id: 7, text: 'Card #7', uri: 'https://source.unsplash.com/random' },
  { id: 8, text: 'Card #8', uri: 'https://images.unsplash.com/photo-1611526271018-e05bb979c50b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' },
];



export class App extends Component {

  renderCard(item){
    return(
    <Card>
    <Card.Title>{item.text}</Card.Title>
    <Card.Image source={require("./assets/image.jpg")} style={{marginBottom:15}}>
    </Card.Image>
    <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
    </Text>
    <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{backgroundColor:"#03A9F4", marginTop:5}}
        title='VIEW NOW' />
  </Card>
    )
}
  render() {
    return (
      <View>
        <Deck data={DATA} renderCard={this.renderCard}/>
      </View>
    )
  }
}

export default App

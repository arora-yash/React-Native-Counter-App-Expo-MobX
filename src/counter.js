import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import CounterStore from './counterStore.js';
import {observer} from 'mobx-react';
import {View} from 'react-native';

@observer
export default class Counter extends Component{
  constructor(){
    super();
    this.state={
      isReady: false
    }
  }

  render(){
    return(
      <Container style={{backgroundColor: 'black'}}>
                <Header>
                    <Body>
                        <Title>Counter using MobX</Title>
                    </Body>
                </Header>
                <Card style= {{flex:0.2}}>
                <CardItem>
                            <Text style = {{fontSize: 20, fontWeight: 'bold'}}>
                                {CounterStore.counter}
                            </Text>
                </CardItem>
                </Card>
                        <Button primary block onPress= {() => CounterStore.increment()}>
                             <Text>Increment</Text>
                         </Button>
                         <Button primary block onPress= {() => CounterStore.decrement()}>
                              <Text>Decrement</Text>
                          </Button>
                          <View style={{ flex:1 }}>
                          </View>
            </Container>
    );
  }
}

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class VerticalStretch extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 116, justifyContent:'stretch', backgroundColor: '#50E3C2'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('LayoutExercise', () => VerticalStretch);
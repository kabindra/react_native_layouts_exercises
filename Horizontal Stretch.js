import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class HorizontalStretch extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{height: 116, justifyContent:'stretch', backgroundColor: '#50E3C2'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('LayoutExercise', () => HorizontalStretch);
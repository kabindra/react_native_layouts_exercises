import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexPortion extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: '#4A90E2'}} />
        <View style={{flex: 1, backgroundColor: '#50E3C2'}} />
        <View style={{flex: 1, backgroundColor: '#9013FE'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('LayoutExercise', () => FlexPortion);
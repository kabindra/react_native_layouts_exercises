import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FullscreenFlex extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#4A90E2'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('LayoutExercise', () => FullscreenFlex);
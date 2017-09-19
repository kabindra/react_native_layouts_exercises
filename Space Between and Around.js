import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class SpaceBetweenandAround extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
        }}>
          <View style={{width: 116, height: 116, backgroundColor: '#50E3C2'}} />
          <View style={{width: 116, height: 116, backgroundColor: '#4A90E2'}} />
          <View style={{width: 116, height: 116, backgroundColor: '#9013FE'}} />
        </View>
        
        <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
          <View style={{width: 116, height: 116, backgroundColor: '#50E3C2'}} />
          <View style={{width: 116, height: 116, backgroundColor: '#4A90E2'}} />
          <View style={{width: 116, height: 116, backgroundColor: '#9013FE'}} />
        </View>
        
        <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'space-around',
        }}>
          <View style={{width: 116, height: 116, backgroundColor: '#50E3C2'}} />
          <View style={{width: 116, height: 116, backgroundColor: '#4A90E2'}} />
          <View style={{width: 116, height: 116, backgroundColor: '#9013FE'}} />
        </View>
        
      </View>
    );
  }
};

AppRegistry.registerComponent('LayoutExercise', () => SpaceBetweenandAround);
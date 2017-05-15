/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView from'react-native-scrollable-tab-view';
import FindTabBar from'./FindTabBar';


export default class Demo7 extends Component {
  constructor(props){
    super(props);
    this.state={
      tabNames:['热点','话题','活动','专家','品教'],
    };
  }
  render() {
    let tabNames = this.state.tabNames;
    return (
      <ScrollableTabView renderTabBar={()=><FindTabBar tabNames={tabNames}/>}
      style={{marginTop:20}}
      >

      <View style = {styles.content} tabLabel='Key1'>
        <Text>#1</Text>
      </View>
      <View style = {styles.content} tabLabel='Key2'>
        <Text>#2</Text>
      </View>
      <View style = {styles.content} tabLabel='Key3'>
        <Text>#3</Text>
      </View>
      <View style = {styles.content} tabLabel='Key4'>
        <Text>#4</Text>
      </View>
      <View style = {styles.content} tabLabel='Key5'>
        <Text>#5</Text>
      </View>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBEBEB',
    flex: 1
  }
});

AppRegistry.registerComponent('Demo7', () => Demo7);

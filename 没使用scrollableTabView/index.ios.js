import React,{Component} from 'react';
import  SegmentTabBar from './SegmentTabBar';

import{
  AppRegistry,
  StyleSheet,
  View,
  ListView,
  Text,
} from 'react-native';
var data=["#1","#2","#3","#4","#5"];
export default class segmentComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      index:0,
    }
  }
  render(){
    return(
      <View style={{flex:1}}>
        <View style = {{height:44}}>
          <SegmentTabBar data={data} tabSelected={0} click={this.onPress.bind(this)}/>
        </View>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:30}}>{data[this.state.index]}</Text>
        </View>

      </View>
    );
  }

  onPress(val){
    console.log("点击第"+val+"个tab");
    this.setState({
      index:val
    });
  }
}

AppRegistry.registerComponent('segmentComponent', () => segmentComponent);

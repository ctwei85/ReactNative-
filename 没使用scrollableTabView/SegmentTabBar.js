import React,{Component}from 'react';
import {StyleSheet,Text,View,TouchableOpacity}from 'react-native';

export default class SegmentTabBar extends Component{
  constructor(props){
    super(props);
    this.state={
      tabSelected:this.props.tabSelected,
    }
  }
  render(){
    return(
        <View style = {{flex:1,flexDirection:'row'}}>
          {this.renderHeader()}
        </View>
      );
  }
  renderHeader(){
    var data = this.props.data;
    var header = [];
    var tab = this.state.tabSelected;
    console.log("tab是"+tab);
    var tabIndex=0;
    for(var i in data){
      var tabStyle = null;
      var colorline=null;
      if(tabIndex == tab){
        tabStyle = {color:'#1EB4F5',fontSize:15};
        colorline = '#1EB4F5';
      }else{
        tabStyle = {color:'#898989',fontSize:15}
        colorline = '#B5B5B6';
      }

      header.push(
        <TouchableOpacity style={{flex:1}} onPress={this.onPress.bind(this,i)}>
          <View style={{height:43,alignItems:'center',justifyContent:'center'}}>
            <Text style={tabStyle}>{data[i]}</Text>
          </View>
          <View style = {{backgroundColor:colorline,flex:1}}></View>
        </TouchableOpacity>
      );
      tabIndex++;
    }
    return header;
  }

  onPress(val){
    this.setState({
      tabSelected:val,
    });
    this.props.click(val);//回调给父类的参数
  }
}
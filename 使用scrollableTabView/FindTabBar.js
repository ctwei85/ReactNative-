import React from 'react';
import{
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
}from 'react-native';
const FindTabBar = React.createClass({
	propTypes:{
		goToPage:React.PropTypes.func,//跳转到对应tab的方法
		activeTab:React.PropTypes.number,//当前被选中的tab下标
		tabs:React.PropTypes.array,//所有tabs集合

		tabNames:React.PropTypes.array,//保存Tab名称
	},

	render(){
		return(
			<View style={styles.tabs}>
				{this.props.tabs.map((tab,i)=>this.renderTabOption(tab,i))}
			</View>
			);
	},

	renderTabOption(tab,i){
		const color=this.props.activeTab==i ?"#0000ff":"#ADADAD";
		const colorline = this.props.activeTab==i?"#0000ff":"#ADADAD";
		return(
			<TouchableOpacity onPress={()=>this.props.goToPage(i)} style = {styles.tab}>
				<View style = {styles.tabItem}>
					<Text style={{color:color,fontSize:30}}>{this.props.tabNames[i]}</Text>
					<View style={{width:30,height:1,backgroundColor:colorline,marginTop:16}}></View>
				</View>
				
			</TouchableOpacity>
		);
	},
});

const styles = StyleSheet.create({
	tabs:{
		flexDirection:'row',
		height:50,
	},

	tab:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	tabItem:{
		flexDirection:'column',
	},
});

export default FindTabBar;
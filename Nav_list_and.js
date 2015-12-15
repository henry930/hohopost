'use strict';

var React = require('react-native');

var  {
	Image,
	ListView,
	TouchableOpacity,
	StyleSheet

}  =  React;

var NavList = React.createClass({
	render(){
		<TouchableOpacity style={{flex: 3, flexDirection:'row',justifyContent: 'center'}} >
            <Image  style={styles.image}  source={require("./images/home.png")} />
            <Image  style={styles.image}  source={require("./images/grid.png")} />
            <Image  style={styles.image}  source={require("./images/search.png")} />                        
            <Image  style={styles.image}  source={require("./images/mail.png")} />
            <Image  style={styles.image}  source={require("./images/profile.png")} />                        
        </TouchableOpacity>
	}
});



var styles = StyleSheet.create({
    image:{
    	flex:1,
    	width:35,
    	height:35,
    	alignItems:'center',
    	alignSelf:'center',
    	backgroundColor:'transparent',
    	marginLeft:10,
    	marginRight:10,
    	marginTop:5,
    	marginBottom:5
    }
});

module.exports = NavList;
'use strict';
 
var React = require('react-native');
var {

    StyleSheet,
    Component,
    Text,
    TextInput,
    Image,
    View,
    Navigator,
    TouchableOpacity,
	  TouchableHighlight,
 	 TouchableNativeFeedback     
   } = React;
 
var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        padding: 10
    },
    image:{
    	width:200,
    	height:50,
    	alignItems:'center',
    	alignSelf:'center',
    	top:50,
    	backgroundColor:'transparent'
    },
    description:{
    	alignSelf:'center',
    	top:100,
    	color:'#00549f',
    	fontSize:30
    },
    box: {
    	color:'#d4d4d5',
    	fontSize:20,
    	borderBottomWidth:1,
    	borderBottomColor:'grey',
    	top:200,
    	backgroundColor:'green',
    	alignSelf:'center'
    },
    searchInput: {
        height: 36,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        borderWidth: 0,
        borderRadius: 4,
        borderColor:'grey',
        padding: 5,
        top:150,
        color:'grey',
        fontStyle:'italic'
    },
    searchInput2: {
        height: 36,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        borderWidth: 0,
        borderRadius: 4,
        borderColor:'#d4d4d5',
        padding: 5,
        top:180,
        color:'grey',
        fontStyle:'italic'
    },
    seperator: {
    	flex:1,
    	height:1,
    	backgroundColor:'#d4d4d5',
    	top:135
    },
    seperator2: {
  		flex:1,  	
    	height:1,
		backgroundColor:'#d4d4d5',
    	top:165    	
    },
    button:{
    	backgroundColor:'#6dcff6',
    	width:80,
    	height:35,
    	alignSelf:'center',
    	top:200,
    	padding:5,
    	borderRadius:5
    },
    buttonText:{
    	fontSize:18,
    	color:'white',
    	lineHeight:24,
    	textAlign:'center'
    }
    
});

var description = "Hello World;"
var phone = "用戶名稱";
var auth = '密碼';
class Signin extends Component {
	state:{text:'Hello'}
	TitleInput(event) {
        this.setState({ Title: event.nativeEvent.text });
   }
   CodeInput(event){
   		this.setState({code: event.nativeEvent.text});
   }
   buttonClicked(event){
    console.log('button clicked');
  	}
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require("./logo.png")} />
                <Text style={styles.description}>登入</Text>
				<TextInput style={styles.searchInput}  onChange={this.TitleInput.bind(this)} placeholder={phone}/>
				<View style={styles.seperator}></View>     
				<TextInput style={styles.searchInput2}  onChange={this.CodeInput.bind(this)} placeholder={auth}/>		
				<View style={styles.seperator2}></View>
			     <TouchableHighlight
			        style={styles.button}
		            onPress={this.gotoNext.bind(this)}>
			          <Text style={styles.buttonText}>驗證</Text>
			      </TouchableHighlight>        				
			</View>
        );
    }
 	   gotoNext() {
		    this.props.navigator.push({
		      id: 'HomePage',
		      name: '主頁',
    });
  }

}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          登錄
        </Text>
      </TouchableOpacity>
    );
  }
};

 
module.exports = Signin;

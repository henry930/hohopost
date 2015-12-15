'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Component,
  ListView,
  View,
  Text,
  Image,
  TextInput,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} = React;
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
    },
    view_container:{
    	top:50,
    	marginTop:20,
    	paddingLeft:10,
    	paddingRight:10, 
    	marginBottom:20, 
    	flexDirection:'column', 
    	overflow:'visible'
    },
    user_container:{
    	flex:1,
    	flexDirection:'row'
    },
    keyword_container:{},
    photo:{
		flex:6,
    	alignSelf:'center',
    	marginBottom:-50
    },
    photo_container:{
    	flex:6,
    	alignItems:'center',
    	justifyContent:'center',
    	alignSelf:'center',
    	flexDirection:'column',
    	padding:0
    },
    nolike:{
    	color:'#415993',
    	lineHeight:20
    },
    price:{
    		textAlign:'center',
    		color:'black',
    		fontWeight:'bold',
    		fontSize:20,
    		justifyContent:'center'

    },
    price_text:{
    	padding:15,
    	flex:1,
    	opacity:0.5,
    	width:500,
    	backgroundColor:'white',
    	marginTop:0,
    	marginBottom:0,
    	
    	flexDirection:'column'
    	
   	},
    content:{},
    like_no:{
    	flexDirection:'row'
    },
    likers:{
    	margin:5,
    	marginBottom:0
    },
    award:{
    	flex:1,
    	marginLeft:20,
    	marginRight:20,
    	backgroundColor:'transparent'
    },
    button:{
    	flex:1,
    	flexDirection:'row'
    },
    heart_button:{
    	flex:1,
    	margin:5,
    },  
    comment_button: {
    	flex:1,
    	margin:5,
    },
    message_button:{
    	flex:1,
    	margin:5
    },
    bookmark:{
    	flex:4,
    	width:100,
    	top:15,
		alignItems:'flex-end',
    	backgroundColor:'transparent'    	
    },
    text:{},
    comment:{
    	flex:3,
    	backgroundColor:'#dcf2fd'

    },
    comment_header_text:{
    	fontSize:20,
    	color:'black'
    },
    comment_box:{
    	flex:5
    },
    user_name:{
    	flex:5,
    	fontSize:20,
    	textAlign:'left',
    	top:15,
    	marginLeft:20
    },
    user_photo:{
    	flex:1.5,
    	width:50,
    	height:50,
    	borderRadius:25,
    	backgroundColor:'transparent',
    	margin:5
    },
    view_comment_header:{
    	paddingTop:10,
    	paddingLeft:20,
    },
    comment_row:{
    	flex:1,
    	flexDirection:'row'
    },
    comment_user_name:{
    	color:'black',
    	fontSize:15
    },
    comment_row_text:{
    	backgroundColor:'#6dcff6',
    	
    	padding:5
    },
    comment_write:{
    	flex:1,
    	marginTop:-10,
    	fontStyle:'italic',
    	padding:15,
    	borderRadius:5,
    	shadowColor:'#a9b8c0',
    	shadowOffset:{width:5,height:5},
    	shadowRadius:15
    }
    
});
class HomePage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: 'grey'}}
                routeMapper={NavigationBarRouteMapper }/>
          } />
    );
  }
  renderScene(route,navigator) {
         return (

    	<View style={styles.view_container}>
    		<View style={styles.user_container}>
    			<View style={styles.user_photo}><Image source={require("./images/user_profile.png")} /></View> 
    			<Text style={styles.user_name}>Henry Yeung</Text>
    			<View style={styles.award}><Image source={require('./images/award.png')}/></View>

    		</View>
    		<View style={styles.keyword_container}>
    			
    		</View>
    		<View style={styles.photo_container}>
	    		<View style={styles.photo}><Image source={require('./images/product_photo.png')} /></View>
	    		<View style={styles.price_text}>
	    			<Text style={styles.price}>$10,000</Text>
	    		</View>
	    	</View>
    		<View style={styles.content}>
    			<View style={styles.button}>
    				<View style={styles.heart_button}><Image source={require('./images/heart_button.png')} /></View>
    				<View style={styles.comment_button}><Image source={require('./images/comment_button.png')} /></View>
    				<View style={styles.message_button}><Image  source={require('./images/message_button.png')}/></View>
	    			<View style={styles.bookmark}><Image  source={require('./images/bookmarked.png')}/></View> 				
    			</View>
    			<View style={styles.like_no}>
	    			<View style={styles.likers}><Image source={require('./images/likers.png')}/></View>
	    			<Text style={styles.nolike}>50個讚好</Text>
	    		</View>
				<Text style={styles.text}>Hello
				</Text>    			
    		</View>
    		<View style={styles.comment}>
    			<View style={styles.view_comment_header}><Text style={styles.comment_header_text}>評論</Text></View>
    			<View style={styles.comment_row}>
    				<View style={styles.user_photo}><Image source={require('./images/user_profile.png')}/></View>
    				<View style={styles.comment_box}>
	    				<Text style={styles.comment_user_name}>Henry Yeung</Text>
	    				<View style={styles.comment_row_text}><Text style={{color:'white'}}>很美!</Text></View>
	    			</View>
    			</View>
    		</View>
    		<TextInput style={styles.comment_write} placeholder={"發表評論"}></TextInput>
    		
    	</View>
    );
    
  }
  gotoHomePage() {
    this.props.navigator.push({
      id: 'HomePage',
      name: '最新二手物品',
    });
  }

  gotoPersonPage() {
    this.props.navigator.push({
      id: 'PersonPage',
      name: '我的最愛',
    });
   } 
  gotoSearchPage() {
    this.props.navigator.push({
      id: 'SearchPage',
      name: '搜尋',
    });
   } 
      
  gotoProfilePage() {
    this.props.navigator.push({
      id: 'ProfilePage',
      name: '個人主頁',
    });
   } 

  gotoInboxPage() {
    this.props.navigator.push({
      id: 'InboxPage',
      name: '通訊',
    });
   } 
}



var NavigationBarRouteMapper = {

  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 5, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10}}>
          返回
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <View style={{ flexDirection:'row',justifyContent:'center', paddingTop:5,alignSelf:'flex-end' }}>
        <TouchableOpacity style={{flex: 3, flexDirection:'column',justifyContent: 'center'}} 
          onPress={()=>navigator.parentNavigator.push({
                          id: 'HomePage',
                          name: '最新二手物品',
                        })} >
              <Image  style={styles.image}  source={require("./images/home.png")} ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 3, flexDirection:'column',justifyContent: 'center'}}
          onPress={()=>navigator.parentNavigator.push({
                          id: 'PersonPage',
                          name: '我的最愛',
                        })}>
            <Image  style={styles.image}  source={require("./images/grid.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 3, flexDirection:'column',justifyContent: 'center'}} 
          onPress={()=>navigator.parentNavigator.push({
                          id: 'SearchPage',
                          name: '搜尋',
                        })}>
           <Image  style={styles.image}  source={require("./images/search.png")} /> 
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 3, flexDirection:'column',justifyContent: 'center'}} 
          onPress={()=>navigator.parentNavigator.push({
                          id: 'InboxPage',
                          name: '通訊',
                        })}>
            <Image  style={styles.image}  source={require("./images/mail.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 3, flexDirection:'column',justifyContent: 'center'}} 
          onPress={()=>navigator.parentNavigator.push({
                          id: 'ProfilePage',
                          name: '個人主頁',
                        })}>
            <Image  style={styles.image}  source={require("./images/profile.png")} /> 
        </TouchableOpacity> 
      </View>  
    );
  }
};

module.exports = HomePage;

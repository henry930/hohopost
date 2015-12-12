'use strict';
 
var React = require('react-native');
var Signin = require('./Signin');
var Featured = require('./Featured');
var BookList = require('./BookList');
var Inbox = require('./Inbox');

var Search = require('./Search');
 
var {
    AppRegistry,
    Image,
    StyleSheet,
    TabBarIOS,
    Component,
    View,
    Text
   } = React;

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
}); 
class BookSearch extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }
   _renderContent(color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  }
    render() {
        return (
        	
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'signin'}
                    icon={require("./signin.png")}
                    //systemIcon={'top-rated'}
                    title={'最新熱賣'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'signin'
                        });
                    }}>
                    <Signin/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                	style={styles.bar}
                    selected={this.state.selectedTab === 'featured'}
                    icon={require("./grid.png")}
                    title={'分類廣告'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}>
                    <BookList/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                 	style={styles.bar}
                    selected={this.state.selectedTab === 'search'}
                    icon={require("./search.png")}
                    title={'搜尋'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Search/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                 	style={styles.bar}
                    selected={this.state.selectedTab === 'inbox'}
                    icon={require("./inbox.png")}
                    title={'信箱'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'inbox'
                        });
                    }}>
                     <Inbox/>

                </TabBarIOS.Item>
                <TabBarIOS.Item
                 	style={styles.bar}
                    selected={this.state.selectedTab === 'profile'}
                    icon={require("./profile.png")}
                    title={'個人收藏'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'profile'
                        });
                    }}>
                    <Search/>
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
}
 
AppRegistry.registerComponent('BookSearch', () => BookSearch);
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Component,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} = React;

class SearchPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5', alignItems: 'center'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableHighlight
            onPress={this.gotoNext.bind(this)}>
          <Text style={{color: 'red'}}>下一页</Text>
        </TouchableHighlight>
      </View>
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'MainPage',
      name: '主页',
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, nextState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10,}}>
          返回
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, nextState) {
    return null;
  },
  Title(route, navigator, index, nextState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          搜尋
        </Text>
      </TouchableOpacity>
    );
  }
};

module.exports = SearchPage;

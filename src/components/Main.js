/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase'
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux';
import Login from './Login2';

import Loader from './Loader';
import Navigation from './Navigation';
import RegisteredNavigation from './RegisteredNavigation';

import reducers from '../reducers/PeopleReducer';
import Thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(Thunk));

export default class App extends Component {
  state = {
    loggedIn: null,
    registered: false
  };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCqWCIuaGsAj_uSWWoAkwoVFIsor2g55ec",
      authDomain: "intellicel-c9a74.firebaseapp.com",
      databaseURL: "https://intellicel-c9a74.firebaseio.com",
      projectId: "intellicel-c9a74",
      storageBucket: "intellicel-c9a74.appspot.com",
      messagingSenderId: "1043485647586"
    });
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.setState({loggedIn: true});

        if (user.displayName) {
          this.setState({registered: true});
        }
      } else {
        this.setState({loggedIn: false});
      }
    });
  }
  renderInitialView() {
    switch(this.state.loggedIn) {
      case true:
       return <Navigation />
      case false:
        if (this.state.registered) {
          return <RegisteredNavigation/>
        }
        else {
          return <Login/>
        }
      default:
        return <Loader size="large"/>
    }
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {this.renderInitialView()}
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});



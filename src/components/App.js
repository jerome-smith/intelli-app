
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import firebase from 'firebase'
import { Provider, connect } from 'react-redux';
import { StackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux';

import LoginScreen from './Login2';
import NavigationScreen from './Navigation';
import LoaderScreen from './Loader';
import RegistrationScreen from './MyHomeScreen';

import reducers from '../reducers/';
import Thunk from 'redux-thunk';
import * as action from '../actions/';


const store = createStore(reducers, applyMiddleware(Thunk));
// just a list of screens i
const AppNavigator = StackNavigator({
  Login : { screen: LoginScreen },
  Home: { screen: NavigationScreen },
  Loader: { screen: LoaderScreen },
  Register: { screen: RegistrationScreen }
});

class App extends Component {

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
  render() {
    return (
      <Provider store={store}>
       <AppNavigator />
      </Provider>
    );
  }
}
const mapStateToProps = (state) => ({
  nav: state.nav,
  loggedIn: null,
  registered: false
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;


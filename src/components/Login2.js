
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
import firebase from 'firebase';
import LoginButton from './Button';
import RegisterScreen from './MyHomeScreen';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import * as actions from '../actions';
import PropTypes from 'prop-types';


const { width, height } = Dimensions.get("window");

const background = require("../images/login1_bg.jpg");
const mark = require("../images/login1_mark.png");
const lockIcon = require("../images/login1_lock.png");
const personIcon = require("../images/login1_person.png");



class Login extends Component {
  state = {
      email: '',
      password: '',
      error: '',
      loading: false,
      registered : false,
  };

  onButtonLogin() {
    console.log('button pressed')
    const { email, password } = this.state;
    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onAuthSuccess.bind(this))
      .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(this.onAuthSuccess.bind(this))
              .catch(this.onAuthFailed.bind(this));
      });

  }
  onButtonPress() {
    console.log(this.state, 'LOGIN2 STATE');
    this.props.navigation.navigate('Register');
    //return <RegisterScreen/>;
  }
  onAlreadyRegister () {
    alert('tis')
  }
  onAuthSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
      registered : false,
    });
    this.props.navigation.navigate('Home');
  }

  onAuthFailed() {
    this.setState({
        error: 'Authentication Failed',
        loading: false,
    });
  }

  renderLoader() {
    console.log('RENDER', this);
    if (this.state.loading) {
        return <Loader size="large"/>;
    } else {
        return <Button  title="Login" onPress={this.onButtonLogin.bind(this)} />
    }
  }
  render() {
   const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
              <View>
                <Text style={styles.error}>{this.state.error}</Text>
              </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput
                placeholder="Username"
                value={this.state.email}
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
                onChangeText={email => this.setState({ email })}
                placeholderTextColor="#FFF"
                style={styles.input}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput
                placeholderTextColor="#FFF"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                placeholder="Password"
                style={styles.input}
                secureTextEntry
              />
            </View>
            <TouchableOpacity activeOpacity={.5}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>

               {this.renderLoader()}
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Don't have an account?</Text>
              <TouchableOpacity activeOpacity={.5} onPress={
                this.state.loggedIn ? this.onAlreadyRegister.bind(this) : this.onButtonPress.bind(this)}>
                <View>
                 <Text style={styles.signupLinkText}>Register</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  error : {
     backgroundColor: "transparent",
    color: 'red',
    alignItems: "center",
      fontSize: 18,
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});

const mapStateToProps = state => {
  return {
      nav: state.nav
   };
};

export default connect(mapStateToProps, actions)(Login);
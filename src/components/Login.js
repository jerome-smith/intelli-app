
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
import firebase from 'firebase';

const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();
const RegisterButton = MKButton.coloredButton()
.withText('Register')
.build();

const styles = StyleSheet.create({
  form: {
      paddingBottom: 10,
      //width: 200,
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  fieldStyles: {
      height: 40,
      color: MKColor.Orange,
      width: 200,
  },
  loginButtonArea: {

  },
  errorMessage: {
      marginTop: 15,
      fontSize: 15,
      color: 'red',
      alignSelf: 'center'
  },
});
const stylesw = StyleSheet.create({
  one: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onedep: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding:20,
    alignItems: 'center',
  },
  onebutt: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding:80,
    alignItems: 'center',
  },
  two: {
    width: 300,
    height: 100,
    backgroundColor: 'skyblue'
  },
  three: {
    width: 300,
    height: 100,
    backgroundColor: 'red'
  },
  four: {
    width: 300,
    height: 100
  },
});
export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress() {
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

  onAuthSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  onAuthFailed() {
    this.setState({
        error: 'Authentication Failed',
        loading: false,
    });
  }

  renderLoader() {
    if (this.state.loading) {
        return <Loader size="large"/>;
    } else {
        return <LoginButton onPress={this.onButtonPress.bind(this)} />
    }
  }

  render() {
    const { form, fieldStyles, loginButtonArea, errorMessage } = styles;
    return (
      <View style={stylesw.one}>
        <View style={stylesw.two}>
          <TextInput
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={fieldStyles}
              placeholder={'Email...'}
          />
          <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              style={fieldStyles}
              placeholder={'Password...'}
              password={true}
          />
        </View>
        <View style={stylesw.onedep}>
          <View style={stylesw.two}>
           <View style={stylesw.onebutt}>{this.renderLoader()}</View>
           <View style={stylesw.onebutt}><RegisterButton onPress={this.onButtonPress.bind(this)} /></View>
          </View>
        </View>
      </View>
    );
  }
}

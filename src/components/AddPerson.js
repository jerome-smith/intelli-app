
import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { connect } from 'react-redux';
import { MKTextField, MKColor, MKButton, getTheme } from 'react-native-material-kit';
import firebase from 'firebase';

import * as actions from '../actions'

const theme = getTheme();
const styles = StyleSheet.create({
  form :{
    flex:1,
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between'
  },
  fieldStyles: {
height:30
  },
  divider: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center'
  },
  addButton: {
    marginTop: 20
  },
  container : {
    backgroundColor : 'white',
    borderColor: MKColor.Silver,
    borderWidth: 1,
    paddingBottom: 30,
    paddingTop: 30
  },
  headerText : {
    alignContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 2,
    backgroundColor: MKColor.Grey
  },
  icon: {
    paddingBottom: 2,
  }
});

const AddButton = MKButton.coloredButton()
  .withText('Add')
  .build();

class AddPerson extends Component {
  static navigationOptions = {
      tabBarLabel: 'Complete',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name={'plus'}
          size={30}
          source={require('../images/add_button@3x.png')}
          style={[{ color:tintColor }, styles.icon]}
        />
      )
  }
  onAuthSuccess(props) {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
      registered : false,
    });
  }
  onAuthFailed(){

  }
  onAddPress (x) {
    console.log(this.state, 'props my properties');
    const { first_name, last_name, email, companyname, street, suburb, province, phone, workstreet, worksuburb, workprovince, workphone, bankname, accountnumber, accounttype, branchcode } = this.state;
    this.props.createNewContact(this.state);
    //this.props.navigation.navigate('Home');

  }
   _renderTitle (title) {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Text style={{fontSize: 20}}>{title}</Text>
      </View>
    )
  }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.form}>
      {this._renderTitle('Basic')}

        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.last_name}
                     onChangeText={value => this.setState({'firstname': value})}
                     placeholder={'First Name'} />
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.last_name}
                     onChangeText={value => this.setState({'lastname': value})}
                     placeholder={'Last name'} />
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.email}
                     autoCapitalize={'none'}
                     returnKeyType={'done'}
                     autoCorrect={false}
                     onChangeText={value => this.setState({'email':value})}
                     placeholder={'Email'} />
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.bankname}
                     onChangeText={value => this.setState({'bankname':value})}
                     placeholder={'Bank name'} />
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.accountnumber}
                     onChangeText={value => this.setState({'accountnumber':value})}
                     placeholder={'accountnumber'} />
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.accounttype}
                     onChangeText={value => this.setState({'accounttype':value})}
                     placeholder={'accounttype'} />
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.branchcode}
                     onChangeText={value => this.setState({'branchcode':value})}
                     placeholder={'branchcode'} />
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.companyname}
                     onChangeText={value => this.setState({'companyname':value})}
                     placeholder={'companyname'} />
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.workstreet}
                     onChangeText={value => this.setState({'workstreet':value})}
                     placeholder={'workstreet'} />
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.worksuburb}
                     onChangeText={value => this.setState({'worksuburb':value})}
                     placeholder={'worksuburb'} />
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.workprovince}
                     onChangeText={value => this.setState({'workprovince':value})}
                     placeholder={'workprovince'} />
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.workphone}
                     onChangeText={value => this.setState({'workphone':value})}
                     placeholder={'workphone'} />
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.street}
                     onChangeText={value => this.setState({'street':value})}
                     placeholder={'street'} />
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.suburb}
                     onChangeText={value => this.setState({'suburb':value})}
                     placeholder={'suburb'} />
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.province}
                     onChangeText={value => this.setState({'province':value})}
                     placeholder={'province'} />

      <View style={styles.addButton}>
        <AddButton onPress={this.onAddPress.bind(this)}/>
      </View>
</View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  const { first_name, last_name, phone, email, bankname, companyname, notes, street, suburb, province, workstreet, worksuburb, workprovince, workphone, accountnumber, accounttype, branchcode } = state;
  return { first_name, last_name, phone, email, bankname, companyname, notes, street, suburb, province, workstreet, worksuburb, workprovince, workphone, accountnumber, accounttype, branchcode };
}
console.log(mapStateToProps);
export default connect(mapStateToProps, actions)(AddPerson);

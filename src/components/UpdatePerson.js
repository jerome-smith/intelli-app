/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKTextField, MKColor, MKButton} from 'react-native-material-kit';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  fieldStyles: {
    height: 40,
    color: MKColor.Orange,
  },
  addButton:{
    marginTop: 20,
  },
});

const UpdateButton = MKButton.coloredButton()
  .withText('UPDATE')
  .build();

class UpdatePerson extends Component {
    static navigationOptions = {
        tabBar: {
            label: 'Add Person',
            icon: ({ tintColor }) => (
                <Icon
                    name={'plus'}
                    size={70}
                    style={[{ color: tintColor }, styles.icon]}
                />
            )
        }
    }
    onUpdatePress() {
      const { first_name, last_name, email, companyname, street, suburb, province, phone, workstreet, worksuburb, workprovince, workphone, bankname, accountnumber, accounttype, branchcode, uid } = this.props;

      this.props.saveContact({ first_name, last_name, email, companyname, street, suburb, province, phone, workstreet, worksuburb, workprovince, workphone, bankname, accountnumber, accounttype, branchcode, uid });

    }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Text>Update contact</Text>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.first_name}
                     onChangeText={value => this.props.formUpdate({prop: 'first_name', value})}
                     placeholder={'First Name'} tintColor={'#f5deb3'}/>


        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.last_name}
                     onChangeText={value => this.props.formUpdate({prop: 'last_name', value})}

                     placeholder={'Last name'} tintColor={MKColor.Teal}/>


        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.email}
                     onChangeText={value => this.props.formUpdate({prop: 'email', value})}
                     placeholder={'Email'} tintColor={MKColor.Teal}/>
                    <Text style={styles.divider}>Bank details</Text>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.bankname}
                     onChangeText={value => this.props.formUpdate({prop: 'bankname', value})}
                     placeholder={'Bank name'} tintColor={MKColor.Green}/>

        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.accountnumber}
                     onChangeText={value => this.props.formUpdate({prop: 'accountnumber', value})}
                     placeholder={'accountnumber'} tintColor={MKColor.Green}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.accounttype}
                     onChangeText={value => this.props.formUpdate({prop: 'accounttype', value})}
                     placeholder={'accounttype'} tintColor={MKColor.Green}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.branchcode}
                     onChangeText={value => this.props.formUpdate({prop: 'branchcode', value})}
                     placeholder={'branchcode'} tintColor={MKColor.Green}/>
                    <Text style={styles.divider}>Work details</Text>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.companyname}
                     onChangeText={value => this.props.formUpdate({prop: 'companyname', value})}
                     placeholder={'companyname'} tintColor={MKColor.Teal}/>

        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.workstreet}
                     onChangeText={value => this.props.formUpdate({prop: 'workstreet', value})}
                     placeholder={'workstreet'} tintColor={MKColor.Teal}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.worksuburb}
                     onChangeText={value => this.props.formUpdate({prop: 'worksuburb', value})}
                     placeholder={'worksuburb'} tintColor={MKColor.Teal}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.workprovince}
                     onChangeText={value => this.props.formUpdate({prop: 'workprovince', value})}
                     placeholder={'workprovince'} tintColor={MKColor.Teal}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.workphone}
                     onChangeText={value => this.props.formUpdate({prop: 'workphone', value})}
                     placeholder={'workphone'} tintColor={MKColor.Teal}/>
                     <Text style={styles.divider}>Home details</Text>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.street}
                     onChangeText={value => this.props.formUpdate({prop: 'street', value})}
                     placeholder={'street'} tintColor={MKColor.Teal}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.suburb}
                     onChangeText={value => this.props.formUpdate({prop: 'suburb', value})}
                     placeholder={'suburb'} tintColor={MKColor.Teal}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.province}
                     onChangeText={value => this.props.formUpdate({prop: 'province', value})}
                     placeholder={'province'} tintColor={MKColor.Teal}/>
          <View style={styles.addButton}>
            <UpdateButton onPress={this.onUpdatePress.bind(this)}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { first_name, last_name, email, companyname, street, suburb, province, phone, workstreet, worksuburb, workprovince, workphone, bankname, accountnumber, accounttype, branchcode, uid } = state;
  return { first_name, last_name, email, companyname, street, suburb, province, phone, workstreet, worksuburb, workprovince, workphone, bankname, accountnumber, accounttype, branchcode, uid };

};

export default connect(mapStateToProps, actions)(UpdatePerson);
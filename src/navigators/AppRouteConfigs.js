import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import LoginScreen from '../components/Login2';
import RegistrationScreen from '../components/AddPerson';
import NavigationScreen from '../components/Navigation';

import PeopleList from '../components/PeopleList';
import CompanyList from '../components/CompanyList';
import AddPerson from '../components/AddPerson';

export const LoggedInStack = TabNavigator({
  Home: {
    screen: PeopleList,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="home"
          color={tintColor}
          size={28}
        />
      ),
    },
  },
  Account: {
    screen: AddPerson,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="account-circle"
          color={tintColor}
          size={28}
        />
      ),
    },
  },
}, {
  tabBarPosition: 'bottom',
  tabBarComponent: TabBarBottom,
});

export const LoggedOutStack = StackNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegistrationScreen },
});

const LoggedOutState = ({ dispatch, nav }) => (
  <LoggedOutStack navigation={addNavigationHelpers({ dispatch, state: nav })} />
);
const LoggedInState = ({ dispatch, nav }) => (
  <LoggedInStack navigation={addNavigationHelpers({ dispatch, state: nav })} />
);
LoggedOutState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};
LoggedInStack.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(LoggedOutState, LoggedInState);
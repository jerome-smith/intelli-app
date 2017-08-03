import { StackNavigator, TabNavigator } from 'react-navigation';
import PeopleList from './AddPerson';



const RegisteredNavigation = TabNavigator({
    PeopleList: { screen: PeopleList },

}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#80cbc4',
        swipeEnabled: true,
        showLabel: false,
        style: {
         backgroundColor: '#26a69a',
        },
    },
});

export default RegisteredNavigation;
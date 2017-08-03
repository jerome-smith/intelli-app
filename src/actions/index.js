import firebase from 'firebase';

export const selectPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        payload: peopleId,
    };
};

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',
    };
};

export const formUpdate = ({ prop, value }) => {
    console.log({ prop, value });
    return {
        type: 'FORM_UPDATE',
        payload: { prop, value },
    };
};

export const onAuthSuccess =  function (a,state) {
    var m  = firebase.auth().currentUser;
    firebase.database().ref(`/users/${m.uid}/people`).push(a);
};
export const onAuthFailed = function(b, state) {
    console.log(b, 'this is b');
};
export const createNewContact = (state) => {
        this.state = state;
 return (dispatch) => {
    const { email, accountnumber } = state;
      firebase.auth().signInWithEmailAndPassword(email, accountnumber)
      .then(onAuthSuccess.bind(this, state))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, accountnumber)
            .then(onAuthSuccess.bind(this, state))
            .catch(() => {
                firebase.auth().signInWithEmailAndPassword(email, accountnumber)
                .then(onAuthSuccess.bind(this, state))
                .then(dispatch({type: 'SAVE_CONTACT', payload:state}))
                .catch(() => {onAuthFailed.bind(this, state)});
            });
      });
  }
};

export const loadInitialContacts = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/people`)
        .on('value', snapshot => {
            dispatch({ type: 'INITIAL_FETCH', payload: snapshot.val() });
        });
    };
};

export const deleteContact = (uid) => {
    const { currentUser } = firebase.auth();
    var m  = firebase.auth().currentUser;

    m.updateProfile({
      displayName: null,
    });
    return (dispatch) => {
        firebase.database().ref(`/users/${m.uid}/people/${uid}`)
        .remove()
        .then(() => {
            dispatch({ type: 'DELETE_CONTACT'});
        });
    };
};

export const updateContact = (personSelected) => {
    return {
        type: 'UPDATE_CONTACT',
        payload: personSelected,
    };
};

export const goToScreen = (route) => {
    console.log(route, 'this is the route');
    return (dispatch) => {
        dispatch({ type: 'goToProfile', payload: route});
    };
};

export const saveContact = ({ first_name, last_name, email, companyname, street, suburb, province, phone, workstreet, worksuburb, workprovince, workphone, bankname, accountnumber, accounttype, branchcode, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/people/${uid}`)
        .set({ first_name, last_name, email, companyname, street, suburb, province, phone, workstreet, worksuburb, workprovince, workphone, bankname, accountnumber, accounttype, branchcode, uid })
        .then(() => {
            dispatch({ type: 'SAVE_CONTACT'});
        });
    };
}
const initialState = {
    people: [],
    detailView: false,
    personSelected: null,
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    companyname: '',
    bankname: '',
    notes: '',
    toUpdate: false,
    street:'',
    suburb:'',
    province:'',
    phone:'',
    workstreet:'',
    worksuburb:'',
    workprovince:'',
    workphone:'',
    accountnumber:'',
    accounttype:'',
    branchcode:''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL_FETCH':
        console.log('this is the INITIAL_FETCH')
            return {
                ...state,
                people: action.payload,
            }
        case 'SELECTED_PERSON':
            return {
                ...state,
                detailView: true,
                personSelected: action.payload
            }

        case 'NONE_SELECTED':
            return {
                ...state,
                detailView: false,
                personSelected: null,
            }
        case 'UPDATE_NAVIGATION':
            return {
                ...state,
                detailView: false,
                personSelected: null,
            }
        case 'FORM_UPDATE':
        console.log(state,'jerome');
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            };

        case 'NEW_CONTACT':
            return {
                ...state,
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                companyname: '',
                bankname: '',
                notes: '',
                street:'',
                suburb:'',
                province:'',
                phone:'',
                workstreet:'',
                worksuburb:'',
                workprovince:'',
                workphone:'',
                accountnumber:'',
                accounttype:'',
                branchcode:''
            }

        case 'ADD_PERSON':
            return {
                ...state,
                ...action.newPerson
            };

        case 'UPDATE_CONTACT':
            return {
                ...state,
                toUpdate: true,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                phone: action.payload.phone,
                email: action.payload.email,
                companyname: action.payload.companyname,
                bankname: action.payload.bankname,
                notes: action.payload.notes,
                uid: action.payload.uid,
                street:action.payload.street,
                suburb:action.payload.suburb,
                province:action.payload.province,
                phone:action.payload.phone,
                workstreet:action.payload.workstreet,
                worksuburb:action.payload.worksuburb,
                workprovince:action.payload.workprovince,
                workphone:action.payload.workphone,
                accountnumber:action.payload.accountnumber,
                accounttype:action.payload.accounttype,
                branchcode:action.payload.branchcode
            }

        case 'SAVE_CONTACT':
            return {
                ...state,
                toUpdate: false,
                detailView: false,
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                companyname: '',
                bankname: '',
                notes: '',
                street:'',
                suburb:'',
                province:'',
                phone:'',
                workstreet:'',
                worksuburb:'',
                workprovince:'',
                workphone:'',
                accountnumber:'',
                accounttype:'',
                branchcode:''
            };

        case 'DELETE_CONTACT':
            return {
                ...state,
                detailView: false,
                personSelected: null,
            }
        case 'DO_REGISTRATION':
            return {
                ...state,
                registrationView: true,
                personSelected: null,
            }
        default:
            return state;
    }
}
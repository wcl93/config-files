/* ----------------store.js ------------------*/
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {};

const middleWare = [thunk];

const store = createStore(rootReducer, initialState,
    compose(applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()));

    export default store;
    
    /* --------------App.js--------------- */
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Hello</h1>
        </div>
      </Provider>
    );
  }
}
export default App;

/* ---------./reducers/index.js-------------- */

import {combineReducers} from 'redux'
import contactReducer from './contactReducer'

export default combineReducers({
    contact:contactReducer
})

/* --------------./reducers/contactReducer--------------- */

import {GET_CONTACTS} from '../actions/types'

const initialState = {};

export default function (state= initialState, action) {
    switch(action.type) {
        case GET_CONTACTS:
        return {
            ...state
        }
        default:
        return state;
    }
}

/* --------------./actions/types.js------------ */

export const GET_CONTACTS = 'GET_CONTACTS'

/* --------------./actions/contactActions.js------------ */
import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from './types';

export const getContacts = () => {
    return {
        type:GET_CONTACTS
    };
};

export const deleteContact = (id) => {
    return {
        type:DELETE_CONTACT,
        payload:id
    };
};

export const addContact = (contact) => {
    return {
        type:ADD_CONTACT,
        payload: contact
    };
};

/* --------------Contacts component------------ */

import {connect} from 'react-redux'
import {getContacts} from '../../actions/contactActions';

class Contacts extends Component {
  componentDidMount(){
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) =>({
  contacts:state.contact.contacts
})

export default connect(mapStateToProps, {getContacts})(Contacts);


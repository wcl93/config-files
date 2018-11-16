import React, {Component} from 'react'

//---------------------Context.js ----------------------
const Context = React.createContext();

const reducer = (state, action)=> {
    switch(action.type){
        case 'DELETE_CONTACT':
        return {
            ...state, 
            contacts:state.contacts.filter(contact=>
            contact.id !== action.payload) 
        };
        case 'ADD_CONTACT':
        return {
            ...state,
            contacts: [action.payload, 
                ...state.contacts]
             //arrayField:state.arrayField.concat(action.payload.name)

        };
        case 'UPDATE_CONTACT':
        return {
            ...state,
            //  this === this ? IF : ELSE
            //id comes from payload.id response 
            contacts:state.contacts.map(contact =>
                contact.id === action.payload.id ? (contact = 
                    action.payload ):contact) 
        }
        default:
        return state;
    }
}

//Provider Component
export class Provider extends Component {
    //whole state
    state ={
        arrayField:['from','state','context'],
        /* able to call this action (method) from other components */
        dispatch: action => {
        this.setState(state=>  reducer(state,action)) //set state to filtered out id
        }
    } 
    //Return context provider
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer

//---------------------------App.js //Provider------------------------------
import {Provider} from "./context";

class App extends Component {
    render() {
      return (
        <Provider>
          <div className="App">
            <h1>App</h1>
            <Users />
          </div>
        </Provider>
      );
    }
  }
  
  export default App;

  //----------------------Consumer--------------------------
 import {Consumer} from "../../context";

  export default class Users extends Component {
      //Dispatch action payload
    onSubmit(dispatch, e){
        e.preventDefault();
        const newUser = {
            //empty
        }
        dispatch({ type:'EXAMPLE', payload: newUser})
    }
    onChange= e =>{
        console.log({ [e.target.name]: e.target.value });
    }
    
    render() {
      return (
        <Consumer>
          {/* child of consumer is always a function {} 
              Access the whole state from value */}
          {value => {
            const { arrayField, dispatch } = value;//Bring in dispatch to use
            return (
              <div >
                <h2>Users This is {arrayField}</h2>
          
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <label>Name</label>
                  <input name='name' onChange={this.onChange}type='text' placeholder='Name..'/>
                  <button type='submit'>Submit</button>
                </form>
              </div>
            );
          }}
        </Consumer>
      );
    }
  }

import React, {Component} from 'react'

//New Context
const Context = React.createContext();

const reducer = (state, action)=> {
    switch(action.type){
        case 'EXAMPLE':
        return {

        };
        case 'EXAMPLE2':
        return{

        };
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

//------------------App.js //Provider-----------------
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

  //----------Consumer-------------
  export default class Users extends Component {
    render() {
      return (
        <Consumer>
          {/* child of consumer is always a function {} 
              Access the whole state from value */}
          {value => {
            const { arrayField } = value;
            return (
              <div >
                <h2>Users This is {arrayField}</h2>
              </div>
            );
          }}
        </Consumer>
      );
    }
  }

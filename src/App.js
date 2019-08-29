import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name : 'Jithesh', age: '31'},
      {name : 'Jinesh', age: '35'}
    ],    
    showPersons : false
  }

  stateChangeHandler = () => {
    this.setState({
      persons: [
        {name : 'Jithesh Kannoth', age: '31'},
        {name : 'Jinesh Kannoth', age: '35'}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesPersonShow = this.state.showPersons;
    this.setState( {
      persons: [
        {name : 'Jithesh', age: '31'},
        {name : 'Jinesh', age: '35'}
      ],    
      showPersons : !doesPersonShow
    });
  }

  render() {    

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        this.state.persons.map(person => {
          return (<Person name= {person.name} age= {person.age}></Person>)
        })      
      );
    }

    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Sample text under the root element</p>
        <button onClick={this.stateChangeHandler}>Change Status</button>
        <button onClick={this.togglePersonHandler}>Toggle Persons</button>
         {persons}
      </div>
    );
  }
}

export default App;



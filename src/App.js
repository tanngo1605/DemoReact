import React, { Component } from "react";
//import logo from './logo.svg';
import { CardList } from "./components/card-list/card-list.component"; //{} to import a function, import a class does not need {}
//import { InputField } from "./components/text-input";
import "./App.css";
import {SearchBox} from './components/search-box/searchBox.component';
/*function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React for the first time
        </a>
      </header>
    </div>
  );
}*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      
      monsters: [],
      searchField: ""
    };
    //this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => {
        this.setState({ monsters: users });
        console.log(users);
      });
  }
  /* <button onClick={() => this.setState ({string: 'Changee text'})}>
          Click me
        </button>
        <p>{this.state.string}</p>*/
  /*handleChange(e) {
    this.setState({ searchField: e.target.value });
    console.log(this.state.searchField);
  }*/
  handleChange = e =>{ //if using arrow function, you dont need to bind(this) in the constructor because it automatically does that
    this.setState({searchField: e.target.value})
  }

  render() {
    //name and age ... are the parameters for the function CardList
    const {monsters, searchField} = this.state; //destructor
    var filteredMonsters = monsters.filter(mon =>
      mon.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
      <h1 className='head'>Monsters</h1>
       
        <SearchBox placeholder ='search monsters' handleChange = {this.handleChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
    //<button>{Dummy}</button>
  }
}

export default App;
//nodeJS: module.exports = App;

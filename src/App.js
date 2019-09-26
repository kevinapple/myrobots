import React,{Component} from 'react';
import {CardList} from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      monsters:[],
      searchField:''
    };
    this.handleState = this.handleState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }
  handleState(){
    this.setState({text:"I have changed the text!"});
  }
  handleChange(e){
    this.setState({searchField:e.target.value});
  }
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return(
        <div className="App">
          <h1>Robots Rolodex</h1>
          <SearchBox 
            placeholder='search monsters'
            handleChange = {this.handleChange}
          />
          <CardList monsters={filteredMonsters} />
        </div>
    );
  }
}

export default App;

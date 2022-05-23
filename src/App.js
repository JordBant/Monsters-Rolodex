import { Component } from 'react';
import List from './components/list/list-component'
import SearchBar from "./components/search-bar/search-component";
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      targeted: ''
    }
  }

  async componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => this.setState(() => {
      return {
        monsters: users
      }
    }))
  }

  onSearch = event => {
    const targeted = event.target.value.toLocaleLowerCase()
    this.setState(
      () => { 
        return { targeted }
    })
  }

  render(){
    const { monsters: monstersArr, targeted } = this.state
    const { onSearch } = this

    const filteredList = monstersArr.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(targeted)
    })

    return (
      <div className="App">
        <SearchBar className='monsters-search-box' placeholder = 'Search Monsters' eventHandler = { onSearch }/>
        <List monsters = { filteredList }/>
      </div>
    );
  }
}

export default App;

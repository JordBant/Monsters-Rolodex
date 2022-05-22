import { Component } from 'react';
import List from './components/list/list-component'
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
    }, 
    () => {
      // console.log(this.state)
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

    console.log(filteredList)

    return (
      <div className="App">
      <input 
        type="text" 
        className="search" 
        placeholder='Search Monsters' 
        onChange = { onSearch }
      />

      {
        // filteredList.map(monster => {
        //   return(
        //     <div key={monster.id}>
        //       <h1> {monster.name} </h1>
        //     </div>
        //   ) 
        // })
      }
      <List />
      </div>
    );
  }
}

export default App;

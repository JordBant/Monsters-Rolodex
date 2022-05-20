import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: []
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

    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const users = response.json()
    // console.log(users)
  }

  render(){
    return (
      <div className="App">
      {
        this.state.monsters.map(monster => {
          return(
            <div key={monster.id}>
              <h1> {monster.name} </h1>
            </div>
          ) 
        })
      }
      </div>
    );
  }
}

export default App;

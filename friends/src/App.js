import React, {Component} from 'react';
import FriendsList from './Components/FriendsList';
import axios from 'axios';
import './App.css';

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount (){
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState( () => ({friends: response.data}));
    })
    .catch(error =>{
      console.error('Server Error', error);
    })
  }

  render(){
    console.log(this.state.friends)

    return (
      <div className="App">
        <header className="App-header">
          <FriendsList  friends={this.state.friends} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

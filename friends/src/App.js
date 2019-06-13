import React, {Component} from 'react';
import FriendsList from './Components/FriendsList';
import axios from 'axios';
import './App.css';
import {Route} from 'react-router-dom';

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount (){
    axios.get('http://localhost:5000/friends')
    .then(response => 
      this.setState({friends: response.data})
    )
    .catch(error =>{
      console.error('Server Error', error);
    })
  }

  addFriend = (data) =>{
    const url = 'http://localhost:5000/friends';
    axios.post(url, data)
      .then(response =>{
         this.setState({friends:response.data});
         this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  deleteFriend = (e,id) =>{
    e.preventDefault();
    const url = `http://localhost:5000/friends/${id}`;
    axios.delete(url)
      .then(response =>{
        this.setState({friends:response.data});
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  render(){
    const friends = this.state.friends

    return (
      <div className="App">
        <header className="App-header">
          <Route 
            exact path='/' 
            render={props =>  
              <FriendsList 
                {...props}  
                friends={friends} 
                addFriend={this.addFriend}
                deleteFriend={this.deleteFriend}
              />
            } 
          />
        </header>
      </div>
    );
  }
}

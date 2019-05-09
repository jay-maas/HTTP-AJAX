import React from 'react';
import './App.css';
import axios from 'axios';
import Friends from './Components/Friends/Friends';
import NewFriendForm from './Components/Friends/NewFriendForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: []
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends') 
      .then(response => {
        console.log(response)
        this.setState({
          friends: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  addFriend = item => {
    axios
      .post('http://localhost:5000/friends', item) 
      .then(response => {
        console.log(response)
        // this.setState({
        //   friends: response.data
        // })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <>
      <NewFriendForm addFriend={this.addFriend}/>
        <Friends friendList={this.state.friends}/>
      </>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import axios from 'axios';
import Friends from './Components/Friends/Friends';
import Friend from './Components/Friends/Friend';
import NewFriendForm from './Components/Friends/NewFriendForm';
import { Link, Route, withRouter } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: [],
      activeFriend: {
        name: "test",
        age: 5,
        email: "test"
      }
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

  setActiveFriend = friend => {
    this.setState({
      activeFriend: friend
    })
  }

  render() {
    return (
      <>
      <Link 
      to="/addFriend">
      Add A Friend
      </Link>

      <Route 
      exact path="/"
      render={props => <Friends {...props}friendList={this.state.friends} 
      setActiveFriend={this.setActiveFriend}
      />} 
        />

      <Route 
      path="/addFriend" 
      render={props => <NewFriendForm {...props} addFriend={this.addFriend} />}
       />

      <Route 
      path="/friends/:id" 
      render={props => <Friend {...props} friend={this.state.activeFriend} setActiveFriend={this.setActiveFriend}
      />}
       />
      </>
    );
  }
}

const AppWithRouter = withRouter(App)

export default AppWithRouter;

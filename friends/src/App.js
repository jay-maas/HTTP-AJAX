import React from 'react';
import './App.css';
import axios from 'axios';
import Friends from './Components/Friends/Friends';
import Friend from './Components/Friends/Friend';
import NewFriendForm from './Components/Friends/NewFriendForm';
import { Link, Route, withRouter } from 'react-router-dom';
import UpdateFriendForm from './Components/Friends/UpdateForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: [],
      activeFriend: {
        name: "test",
        age: 5,
        userImage: "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-1/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_ht=scontent-den4-1.xx&oh=25a3f748cc51a082764dfe2e5cbe48d2&oe=5D6A8059",
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
        this.setState({
          friends: response.data
        })
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

  updateFriend = updatedFriend => {
    axios
    .put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend) 
    .then(response => {
      this.setState({ friends: response.data})
      this.props.history.push("/")
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  deleteFriend = id => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      console.log(response)
      this.props.history.push(`/`)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <>
      <Link style={{paddingLeft: "2%", textDecoration: "none", fontSize: "2em", color: "orange",
      textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}
      to="/">
      Home
      </Link>

      <Link style={{paddingLeft: "5%", textDecoration: "none", fontSize: "2em", color: "orange",  textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}
      to="/addFriend">
      Add A Friend
      </Link>

      <hr/>

      <Route 
      exact path="/"
      render={props => <Friends {...props}
      friendList={this.state.friends} 
      setActiveFriend={this.setActiveFriend}
      deleteFriend={this.deleteFriend}
      />} 
        />

      <Route 
      path="/addFriend" 
      render={props => <div style={{width: "100%", display: "flex", justifyContent: "center"}}><NewFriendForm {...props} addFriend={this.addFriend} /></div>}
       />

      <Route 
      path="/friends/:id" 
      render={props => <div style={{width: "100%", display: "flex", justifyContent: "center"}}><Friend {...props} 
      friend={this.state.activeFriend} 
      setActiveFriend={this.setActiveFriend} 
      deleteFriend={this.deleteFriend}
      /></div>}
       />

      <Route
      path="/update-form"
      render={props => 
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}><UpdateFriendForm {...props} 
      updateFriend={this.updateFriend}
      friend={this.state.activeFriend} 
      /></div>}
        />

      </>
    );
  }
}

const AppWithRouter = withRouter(App)

export default AppWithRouter;

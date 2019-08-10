import React from 'react';
import './App.css';
import axios from 'axios';
import Friends from './Components/Friends/Friends';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/friends') 
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
  render() {
    return (
      <>
        <Friends friendList={this.state.friends}/>
      </>
    );
  }
}

export default App;

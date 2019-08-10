import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

const FriendWrapper = styled.div`
    width: 50%;
    height: auto;
    text-align: center;
    padding: 5% 0;
    margin: 10vh 0;
    border: 1px solid lightgrey;
    background: rgba(46, 49, 49, 1);
    color: rgba(232, 236, 241, 1);
`

const NameWrapper = styled.div`
    font-size: 2em;
    padding: 1% 0 5%;
    &:hover {
        color: rgba(241, 90, 34, 1);
    }
`

const AgeWrapper = styled.div`
    font-size: 1.2em;
    padding: 4%;
    &:hover {
        color: rgba(244, 247, 118, 1);
    }
`

const EmailWrapper = styled.div`
    font-size: 80%;
    padding: 4%;
    &:hover {
        color: rgba(34, 167, 240, 1);
    }
`

const StyledButton = styled.button`
    border-radius: 25px;
    border: 1px dashed black;
    width: 30vw;
    height: auto;
    background: blue;
    color: white;
    font-size: 1.5em;
    margin: 5%;
`

class Friend extends React.Component {
    clickHandler = () => {
        let friend = this.props.friend
        console.log(friend)
        this.props.setActiveFriend(friend)
    }

    deleteFriend = event => {
        event.preventDefault()
        console.log(event.target.id)
        this.props.deleteFriend(event.target.id)
        window.location.reload()
    }

    render(){
        const {age, email, name, id, userImage, color } = this.props.friend
        return(
            <FriendWrapper style={{
        boxShadow: `10px 10px 56px 12px     ${color}`
    }}>
            <Link
            onClick={this.clickHandler} 
            exact to={`/friends/${id}`}
            style={{color: "white", textDecoration: "none"}}>
            <img style={{width: "25vw", height: "25vw", borderRadius: "50%"}}src={userImage} alt={`${name}'s image`} />
            <NameWrapper>{name}</NameWrapper></Link>
            <AgeWrapper>Age: {age}</AgeWrapper>
            <EmailWrapper>email: {email}</EmailWrapper>
            <Link 
            exact to={'/update-form'}
            onClick={this.clickHandler}
            ><StyledButton>Update Friend</StyledButton></Link>
            <StyledButton onClick={this.deleteFriend} id={id}>Delete Friend</StyledButton>
            </FriendWrapper>
        )
    }
}

export default Friend;
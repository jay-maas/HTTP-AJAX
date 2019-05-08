import React from 'react';
import styled from 'styled-components';

const FriendWrapper = styled.div`
    width: 50%;
    height: auto;
    text-align: center;
    padding: 5% 0;
    margin: 10vh 0;
    border: 1px solid lightgrey;
    background: rgba(46, 49, 49, 1);
    color: rgba(232, 236, 241, 1);
    &:hover {
        box-shadow: 10px 10px 56px 12px rgba(211, 84, 0, 1);
    }
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

class Friend extends React.Component {
    render(){
        const {age, email, name} = this.props.friend
        return(
            <FriendWrapper>
            <NameWrapper>{name}</NameWrapper>
            <AgeWrapper>Age: {age}</AgeWrapper>
            <EmailWrapper>email: {email}</EmailWrapper>
            </FriendWrapper>
        )
    }
}

export default Friend;
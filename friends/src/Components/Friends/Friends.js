import React from 'react';
import Friend from './Friend';
import styled from 'styled-components';

const FriendsWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10vh;
`

class Friends extends React.Component{
    render(){
        const friendList = this.props.friendList
        return(
            <FriendsWrapper>
            {friendList&&friendList.map((friend, i) => 
                <Friend 
                setActiveFriend={this.props.setActiveFriend}
                key={i}friend={friend} />
            )}
            </FriendsWrapper>
        )
    }
}

export default Friends;
import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
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

const StyledInput = styled.input`
    border: none;
    width: 50%;
    height: auto;
    text-align: center;
    margin: 5%;
`

const StyledButton = styled.button`
    border-radius: 25px;
    border: 1px dashed black;
    width: 30vw;
    height: auto;
    background: blue;
    color: white;
    font-size: 2em;
`

class NewFriendFrom extends React.Component {
    state ={
        friend: {
            name: "",
            age: "",
            email: ""
        }
    }

    changeHandler = event => {
        let value = event.target.value
        const name = event.target.name
        if (name === 'age') {
            value = Number(value)
        }

        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [name]: value
            }
        }))
    }

    addFriend = event => {
        event.preventDefault()
        this.props.addFriend(this.state.friend)
        this.props.history.push("/")
    }

    render(){
        return(
            <FormWrapper onSubmit={this.addFriend}>

                <StyledInput 
                placeholder="Name"
                name="name"
                value={this.state.friend.name}
                onChange={this.changeHandler}
                />

                <StyledInput 
                placeholder="Age"
                name="age"
                value={this.state.friend.age}
                onChange={this.changeHandler}
                />

                <StyledInput
                placeholder="email" 
                name="email"
                value={this.state.friend.email}
                onChange={this.changeHandler}
                />

                <StyledButton>
                    Add New Friend
                </StyledButton>

            </FormWrapper>
        )
    }
}

export default NewFriendFrom;
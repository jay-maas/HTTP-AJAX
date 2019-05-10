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
            userImage: "",
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
        const {name, userImage, age, email, color} = this.state.friend
        return(
            <FormWrapper onSubmit={this.addFriend}>

                <StyledInput 
                placeholder="Name"
                name="name"
                value={name}
                onChange={this.changeHandler}
                />

                <StyledInput 
                placeholder="User Image"
                name="userImage"
                value={userImage}
                onChange={this.changeHandler}
                />

                <StyledInput 
                placeholder="Age"
                name="age"
                value={age}
                onChange={this.changeHandler}
                />

                <StyledInput
                placeholder="email" 
                name="email"
                value={email}
                onChange={this.changeHandler}
                />

                <StyledInput
                placeholder="color" 
                name="color"
                value={color}
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
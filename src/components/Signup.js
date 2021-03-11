import axios from 'axios';
import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            password: ''
        }
    }

    handleChange = (evt) => {
        console.log(evt.target);
        const { name, value } = evt.target;
        this.setState({
            [name]: value
        });
    };

    signup = async (e) => {
        e.preventDefault();
        const data = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password
        }
        console.log(data);

        const response = await axios.post("http://localhost:3001/users/signup", data);
        console.log(response)
    }

    render() {
        const { username, firstName, lastName, password } = this.state;
        return (
            <div>
                <h1>New Trip Form</h1>
                <form onSubmit={this.signup}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Signup" />
                </form>
            </div>
        )
    }
}

export default Signup;
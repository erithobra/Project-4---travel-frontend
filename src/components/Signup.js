import axios from 'axios';
import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            profilePicture: ''
        };
    };

    handleChange = (evt) => {
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
            password: this.state.password,
            profilePicture: this.state.profilePicture
        };

        const response = await axios.post(`${this.props.URL}/users/signup`, data);
    };

    render() {
        const { username, firstName, lastName, password, profilePicture } = this.state;
        return (
            <div>
                <h1>Create Profile</h1>
                <form onSubmit={this.signup}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={this.handleChange}
                    /> <br />
                        <input
                            type="text"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={this.handleChange}
                        /> <br />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={this.handleChange}
                    /> <br />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={this.handleChange}
                    /> <br />
                    <input
                        type="text"
                        name="profilePicture"
                        placeholder="Link to Profile Picture"
                        value={profilePicture}
                        onChange={this.handleChange}
                    /> <br /> <br />                    
                    <input type="submit" value="Signup" />
                </form>
            </div>
        );
    };
};

export default Signup;
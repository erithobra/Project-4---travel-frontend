import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class EditProfile extends Component {
    constructor(props) {
        super(props)
        const foundUser = this.props.user.find(user => {
            return user.id === parseInt(this.props.match.params.id);
        })
        this.state = {
            redirect: true,
            userId: foundUser.id,
            username: foundUser.username,
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
            password: foundUser.password
        }
    }
    
    handleChange = (evt) => {
        console.log(evt.target);
        const { name, value } = evt.target;
        this.setState({
            [name]: value
        })
        
    };

    editProfile = async (e) => {
        e.preventDefault();
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password
        }
        const response = await axios.put(`${this.props.URL}/users/${this.state.userId}`, data);
        this.setState({
            redirect: false
        });
    }
    deleteUser = async (e) => {
        const deleteUser = await axios.delete(`${this.props.URL}/users/${this.state.userId}`);
        this.setState({ // this doesn't work because the url ceases to exist as soon as axios.delete executes
            redirect: false
        })
    }


    render() {
        const foundUser = this.props.user.find(user => {
            return user.id === parseInt(this.props.match.params.id);
        })
        const { username, firstName, lastName, password } = this.state;
        return (
            <div>
                {this.state.redirect ? (
                <div>
                    {foundUser ? (
                        <div>
                            <h1>Edit Profile Page</h1>
                            <div>
                                <form onSubmit={this.editProfile}>
                                    First Name: <input
                                        type="text"
                                        name="firstName"
                                        placeholder={foundUser.firstName}
                                        value={ firstName }
                                        onChange={this.handleChange}
                                    /> <br />
                                    Last Name: <input
                                        type="text"
                                        name="lastName"
                                        placeholder={foundUser.lastName}
                                        value={ lastName }
                                        onChange={this.handleChange}
                                    /> <br />
                                    Username: <input
                                        type="text"
                                        name="username"
                                        placeholder={foundUser.username}
                                        value={ username }
                                        onChange={this.handleChange}
                                    /> <br />
                                    Password: <input
                                        type="text"
                                        name="password"
                                        placeholder={foundUser.password}
                                        value={ password }
                                        onChange={this.handleChange}
                                    /> <br /> <br />
                                        <input type="submit" value="Save Changes" />
                                </form>
                                <button onClick={this.deleteUser}>Delete User</button>
                            </div>

                        </div>
                    ) :
                        <p>no user data found</p>
                    }
                </div>)
            
                : 
                    <Redirect to={{
                        pathname:`/users`,
                        state: { redirect: this.state.redirect },
                        }}
                    />
                }


            </div>
        )
    }
}

export default EditProfile;
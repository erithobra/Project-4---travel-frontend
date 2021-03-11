import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditProfile extends Component {
    constructor(props) {
        super(props)
        const foundUser = this.props.user.find(user => {
            return user.id === parseInt(this.props.match.params.id);
        })
        this.state = {
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
        // if(this.state.username == ""){
        //     this.setState({
        //         username: "something here"
        //     });
        // }

        const data = {
            lastName: this.state.lastName,
            password: this.state.password
        }
        console.log(data);
//////////     WHAT'S GOING ON HERE????    /////////////
        const response = await axios.put(`http://localhost:3001/users/1`, data);
        console.log(response)
    }

    render() {
        const foundUser = this.props.user.find(user => {
            return user.id === parseInt(this.props.match.params.id);
        })
        const { username, firstName, lastName, password } = this.state;
        return (
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
                        </div>

                    </div>
                ) :
                    <p>no user data found</p>
                }
            </div>
        )
    }
}

export default EditProfile;
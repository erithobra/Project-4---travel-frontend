import React from 'react';
import { Link } from 'react-router-dom';

const EditProfile = (props) => {
   
    const foundUser = props.user.find(user => {
        return user.id === parseInt(props.match.params.id);
    })
    // const { username, firstName, lastName, password } = this.state;
    return (
        <div>
            {foundUser ? (
                <div>
                    <h1>Profile Page</h1>
                    <div>
                        {/* <form>
                            <input
                                type="text"
                                name="username"
                                placeholder={foundUser.username}
                                value="username"
                                // onChange={this.handleChange}
                            />
                        </form> */}
                            <li>username: {foundUser.username}</li>
                            <li>firstName: {foundUser.firstName}</li>
                            <li>lastName: {foundUser.lastName}</li>
                            <li>password: {foundUser.password}</li>

                    </div>
                    <div>
                        <Link to='/profile/:id/edit'>
                            <button>Edit User</button>
                        </Link>
                        <button>Delete User</button>
                    </div>
                </div>
            ) :
                <p>no user data found</p>
            }
        </div>
    )
}

export default EditProfile;
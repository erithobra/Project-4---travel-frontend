import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {

    const foundUser = props.user.find(user => {
        return user.id === parseInt(props.match.params.id);
    })

    return (
        <div>
            {foundUser ? (
                <div>
                    <h1>Profile Page</h1>
                    <div>
                        <li>First Name: {foundUser.firstName}</li>
                        <li>Last Name: {foundUser.lastName}</li>
                        <li>Username: {foundUser.username}</li>
                        <li>Password: {foundUser.password}</li>
                    </div>
                    <div>
                        <Link to={`/profile/${foundUser.id}/edit`}>
                            <button>Edit User</button>
                        </Link>
                    </div>
                </div>
            ) :
                <p>no user data found</p>
            }
        </div>
    )
}

export default Profile;
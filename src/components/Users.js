import React from 'react';
import { Link } from 'react-router-dom';

const Users = (props) => {
    return (
        <div>
            <h1>User Index Page</h1>
            <div>
                {props.users.map(user => (
                    <Link to={`/profile/${user.id}`} key={user.id}>
                        <li>{user.firstName} {user.lastName}</li>
                    </Link>
                ))}
            </div>
            <Link to="/users/signup">Add New User</Link>
        </div>
    );
};

export default Users;
import React from 'react';

const Users = (props) => {
    console.log("test");
    return (
        <div>
            <h1>User Index Page</h1>
            <div>
                {props.users.map(user =>
                    <li key={user.id}>{user.firstName} {user.lastName}</li>
                )}
            </div>
            {/* <Link to="/users/signup">Add New User</Link> */}
        </div>
    )
}

export default Users;
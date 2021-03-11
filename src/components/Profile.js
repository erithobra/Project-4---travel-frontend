import React from 'react';

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
                        <li>username: {foundUser.username}</li>
                        <li>firstName: {foundUser.firstName}</li>
                        <li>lastName: {foundUser.lastName}</li>
                        <li>password: {foundUser.password}</li>
                    </div>
                    {/* <Link to="/users/signup">Add New User</Link> */}
                </div>
            ) :
                <p>no user data found</p>
            }
        </div>
    )
}



export default Profile;
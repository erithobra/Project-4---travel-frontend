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
                    <div className="profilePicture">
                        this is a placeholder for the profile picture
                    </div>
                    <div> 
                        {foundUser.firstName} {foundUser.lastName}
                        <br />
                    {/* </div>
                    <div> */}
                        <Link to={`/profile/${foundUser.id}/edit`}>
                            <button>Edit User</button>
                        </Link>
                        {console.log(props)}
                        <Link 
                            to= {{
                                pathname: "/trips/new",
                                state: { user: foundUser.id }
                            }}
                        >
                            <button>Add New Trip</button>
                        </Link>
                    </div>
                    <div>
                        {foundUser.Trips.map(trip => (
                            <Link to={`/trips/${trip.id}`} key={trip.id}>
                                <div className="tripContainer" key={`${trip.id}.div`}>
                                    <div className="label" key={trip.id}>{trip.name}</div>
                                    <div className="label" key={`${trip.id}${trip.startDate}`}>{trip.startDate}</div>
                                </div>
                            </Link>
                            
                        ))}
                    </div>
                </div>
            ) :
                <p>no user data found</p>
            }
        </div>
    )
}

export default Profile;
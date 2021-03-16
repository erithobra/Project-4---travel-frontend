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
                        <img src={`${foundUser.profilePicture}`} alt="profile"/>
                    </div>
                    <div className="profileButtons"> 
                        <h3>{foundUser.firstName} {foundUser.lastName}</h3>
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
                    <div className="tripIndex">
                        {foundUser.Trips.map(trip => (
                            <Link 
                                to={`/trips/${trip.id}`} key={trip.id}>
                                
                                <div 
                                    style={{
                                        backgroundImage: `
                                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 1)),
                                            url("https://i.imgur.com/9IFJycx.jpg")`,
                                        backgroundSize: "cover",
                                        color: "white",
                                        textDecoration: "none",
                                        backgroundColor: "black"
                                    }}
                                    className="tripContainer" 
                                    key={`${trip.id}.div`}
                                >
                                    <div className="labelContainer">
                                        <div id="labelName" key={trip.id}>{trip.name}</div>
                                        <div id="labelDate" key={`${trip.id}${trip.startDate}`}>{trip.startDate}</div>
                                    </div>
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
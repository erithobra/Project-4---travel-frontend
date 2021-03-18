import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {

    const foundUser = props.user.find(user => {
        return user.id === parseInt(props.match.params.id);
    })

    let profilePicture
    if (foundUser.profilePicture == "") {
        profilePicture = "https://i.imgur.com/0KHg9cf.png"
    } else {
        profilePicture = foundUser.profilePicture
    }

    return (
        <div>
            {foundUser ? (
                <div>
                    <div className="profilePicture">
                        <img src={`${profilePicture}`} alt="profile"/>
                    </div>
                    <div className="profileButtons"> 
                        <h3>{foundUser.firstName} {foundUser.lastName}</h3>
                        <Link to={`/profile/${foundUser.id}/edit`}>
                            <button>Edit User</button>
                        </Link>
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
                        {foundUser.Trips.map(trips => {
                        // finding the tripId and then using that to determine the 
                        // index number of that trip in the Trips array
                            let tripIdNumber = trips.id;
                            let tripIndexNumber = foundUser.Trips.findIndex(elem => elem["id"] === tripIdNumber)

                            return(
                                <Link 
                                    to={`/trips/${trips.id}`} 
                                    key={trips.id}
                                >
                                    <div 
                                        style={{
                                            backgroundImage: `
                                                linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 1)),
                                                url(${props.trip[tripIndexNumber].Photos[0].photo})`,
                                            backgroundSize: "cover",
                                            color: "white",
                                            textDecoration: "none",
                                            backgroundColor: "black"
                                        }}
                                        className="tripContainer" 
                                        key={`${trips.id}.div`}
                                    >
                                        <div className="labelContainer">
                                            <div id="labelName" key={trips.id}>{trips.name}</div>
                                            <div id="labelDate" key={`${trips.id}${trips.startDate}`}>{trips.startDate}</div>
                                        </div>
                                    </div>
                                    {console.log(typeof trips.id)}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            ) :
                <p>no user data found</p>
            }
        </div>
    )
}

export default Profile;
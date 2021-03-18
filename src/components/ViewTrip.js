import React from 'react';
import { Link } from 'react-router-dom';

const ViewTrip = (props) => {

    const foundTrip = props.trip.find(trip => {
        return trip.id === parseInt(props.match.params.id);
    })

    return (
        <div>
            {foundTrip ? (
                <div>
                    <div className="tripHeader">
                        <div className="tripIdent">
                            <h1>{foundTrip.name}</h1>
                            <h3>Destination: {foundTrip.destination}</h3>
                        </div>
                        <div className="tripLinks">
                            {/* These are going to be links that switch the display
                            between the journal and information pages. */}
                            <h5>Journal </h5>
                            <h5>|</h5>
                            <h5>Information</h5>
                            <h5>|</h5>
                            <h5><Link to={`/profile/${foundTrip.userId}`}>Profile</Link></h5>
                        </div>
                        <div className="tripDates">
                            <h6>Start:</h6>
                            <h5>{foundTrip.startDate}</h5>
                            <h6>End:</h6>
                            <h5>{foundTrip.endDate}</h5>
                        </div>
                    </div>
                    <div className="tripBody">
                        <div className="galleryContainer">
                            <Link to={`/trips/${foundTrip.id}/photo/new`}>
                                <button>Add new photo...</button>
                            </Link>
                            {foundTrip.Photos.map(photo => (
                                <div className="thumbnail" key={`${photo.id}thumbnailDiv`}>
{/* OPEN ISSUE: LINK DOES NOT SEND TO CORRECT LOCATION*/}
                                    <Link to={`${photo.photo}`} key={`${photo.id}thumbnailLink`}>
                                        <img src={`${photo.photo}`} alt="vacation" key={`${photo.id}thumbnailImg`}/>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="dayContainer">
                            <div className="addDayContainer">
                                <Link to={`/trips/${foundTrip.id}/day/new`}>
                                    <button>Add new day to trip...</button>
                                </Link>
                            </div>
                            {foundTrip.Days.map(day => {
                            // looking at the date of each day in the Days table and 
                            // finding a photo from the same date in the Photos table
                                let dayIdNumber = day.id;
                                let dayIndexNumber = foundTrip.Days.findIndex(elem => elem["id"] === dayIdNumber)
                                let dayIndexNumberDate = foundTrip.Days[dayIndexNumber].date
                                let photoIndexNumber
                                let dayPreviewPhoto
                                if((foundTrip.Photos.findIndex(elem => elem["date"] === dayIndexNumberDate)) === -1){
                                    dayPreviewPhoto = "https://i.imgur.com/9yVWjB8.jpg"
                                } else {
                                    photoIndexNumber = foundTrip.Photos.findIndex(elem => elem["date"] === dayIndexNumberDate)
                                    dayPreviewPhoto = foundTrip.Photos[photoIndexNumber].photo
                                }

                                return(
                                    <Link style={{
                                        backgroundImage: `

                                            url(${dayPreviewPhoto})`,
                                        backgroundSize: "cover",
                                        color: "white",
                                        textDecoration: "none",
                                        backgroundColor: "black"
                                        }}className = "day" to={`/trips/${foundTrip.id}/day/${day.id}`} key={day.id}>                                
                                            <div  
                                            className="dayInfo">
                                            <p>{day.date}</p>
                                        </div>
                                        <div className="journalEntry">
                                            <p>{day.journal}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            ) :
                <p>no trip data found</p>
            }
        </div>
    )
}

export default ViewTrip;
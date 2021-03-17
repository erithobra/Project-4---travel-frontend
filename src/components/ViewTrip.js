import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DayDiv = styled.div`
backgroundImage: 

`

const ViewTrip = (props) => {



    const foundTrip = props.trip.find(trip => {
        return trip.id === parseInt(props.match.params.id);
    })



    return (
        <div>
            {foundTrip ? (
                <div>
                    <div className="tripHeader">
                        <div className="tripDates">
                            <p>Start: {foundTrip.startDate}</p>
                            <p>End: {foundTrip.endDate}</p>
                        </div>
                        <div className="tripIdent">
                            <p>{foundTrip.name}</p>
                            <p>Destination: {foundTrip.destination}</p>
                        </div>
                        <div className="tripLinks">
                            <p>Journal</p>
                            <p>Information</p>
                        </div>
                    </div>
                    <div className="tripBody">
                        <div className="galleryContainer">
                            <Link to={`/trips/${foundTrip.id}/photo/new`}>
                                <button>Add new photo...</button>
                            </Link>
                            {foundTrip.Photos.map(photo => (
                                <div className="thumbnail">
{/* OPEN ISSUE: LINK DOES NOT SEND TO CORRECT LOCATION*/}
                                    <Link to={`${photo.photo}`}>
                                        <img src={`${photo.photo}`} alt="vacation"/>
                                    </Link>
                                </div>
                            ))}
                            {/* <p> see more... </p> */}
                        </div>
                        <div className="dayContainer">
                            <Link to={`/trips/${foundTrip.id}/day/new`}>
                                <button>Add new day to trip...</button>
                            </Link>
                            {/* <p>Add new day...</p> */}
                            {foundTrip.Days.map(day => {
                            // looking at the date of each day in the Days table and 
                            // finding a photo from the same date in the Photos table
                                let dayIdNumber = day.id;
                                let dayIndexNumber = foundTrip.Days.findIndex(elem => elem["id"] === dayIdNumber)
                                let dayIndexNumberDate = foundTrip.Days[dayIndexNumber].date
                                let photoIndexNumber = foundTrip.Photos.findIndex(elem => elem["date"] === dayIndexNumberDate)
                                let dayPreviewPhoto = foundTrip.Photos[photoIndexNumber].photo

                                return(
                                    <Link style={{
                                        backgroundImage: `
                                            linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 1.0)),
                                            url(${dayPreviewPhoto})`,
                                        backgroundSize: "cover",
                                        color: "white",
                                        textDecoration: "none",
                                        backgroundColor: "black"
                                        }}className = "day" to={`/trips/${foundTrip.id}/day/${day.id}`} key={day.id}>                                
                                        {/* <DayDiv> */}
                                            <div  
                                            className="dayInfo">
                                            <p>{day.date}</p>
                                        </div>
                                        <div className="journalEntry">
                                            <p>{day.journal}</p>
                                        </div>
                                        {/* </DayDiv> */}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>


                    {/* <h1>Trip Page</h1>
                    <div>
                        <li>Trip Name: {foundTrip.name}</li>
                        <li>Start Date: {foundTrip.startDate}</li>
                        <li>End Date: {foundTrip.endDate}</li>
                        <li>Destination: {foundTrip.destination}</li>
                        <li>Created By: {foundTrip.User.firstName}</li>
                    </div>
                    <div>
                        Here are the days in this trip: <br />
                        {foundTrip.Days.map(day => (
                            <Link to={`/trips/${foundTrip.id}/day/${day.id}`} key={day.id}>
                                <li key={day.id}>Day: {day.date}</li>
                            </Link>
                        ))}
                    </div>
                    <div>
                        <Link to={`/trips/${foundTrip.id}/day/new`}>
                            <button>Add Day to Trip</button>
                        </Link>
                        <Link to={`/trips/${foundTrip.id}/edit`}>
                            <button>Edit Trip Info </button>
                        </Link>
                    </div> */}
                </div>
            ) :
                <p>no trip data found</p>
            }
        </div>
    )
}

export default ViewTrip;
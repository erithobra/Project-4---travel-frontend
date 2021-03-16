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
                            <p> add new photo </p>
                            <div className="thumbnail">
                                thumbnail
                            </div>
                            <div className="thumbnail">
                                thumbnail
                            </div>
                            <div className="thumbnail">
                                thumbnail
                            </div>
                            <div className="thumbnail">
                                thumbnail
                            </div>
                            <p> see more... </p>
                        </div>
                        <div className="dayContainer">
                            <div className="day">
                                <p>Add new day...</p>
                                <p>Day</p>
                                <p>Date</p>
                                <p>Journal entry that goes on for a while</p>
                            </div>
                        </div>
                    </div>








                    <h1>Trip Page</h1>
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
                    </div>
                </div>
            ) :
                <p>no trip data found</p>
            }
        </div>
    )
}

export default ViewTrip;
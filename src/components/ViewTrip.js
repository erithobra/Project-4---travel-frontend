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
                        <Link to={`/trips/${foundTrip.id}/edit`}>
                            <button>Edit Trip</button>
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
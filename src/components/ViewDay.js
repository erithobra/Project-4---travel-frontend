import React from 'react';
import { Link } from 'react-router-dom';

const ViewDay = (props) => {

    const foundTrip = props.trip.find(trip => {
        console.log("trip.id: ", trip.id)
        return trip.id === parseInt(props.match.params.tripId);
    })

    const foundDay = foundTrip.Days.find(day => {
        console.log("day.id: ", day.id)
        return day.id === parseInt(props.match.params.dayId)
    })

    console.log("tripId: ", props.match.params.tripId)
    console.log("foundTrip: ", foundTrip)
    console.log("foundDay: ", foundDay)
    return (
        <div>
            <h3>This is a day page.</h3>
            Journal Entry: {foundDay.journal}
            <Link to={`/trips/${foundTrip.id}/edit`}>
                <button>Edit Trip Info </button>
            </Link>
        </div>
    )
}

export default ViewDay;
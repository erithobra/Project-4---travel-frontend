import React from 'react';
import { Link } from 'react-router-dom';

const ViewDay = (props) => {

    const foundTrip = props.trip.find(trip => {
        return trip.id === parseInt(props.match.params.tripId);
    });

    const foundDay = foundTrip.Days.find(day => {
        return day.id === parseInt(props.match.params.dayId)
    });

    return (
        <div className="viewDayJournalEntry">
            <h3>{foundTrip.name} | {foundDay.date}</h3>
            {foundDay.journal}
            <br />
            <Link to={`/trips/${foundTrip.id}/day/${foundDay.id}/edit`}> <br />
                <button>Edit Entry </button>
            </Link> <br /> <br />
            <Link to={`/trips/${foundTrip.id}`}><button>Return to Trip</button></Link>
        </div>
    );
};

export default ViewDay;
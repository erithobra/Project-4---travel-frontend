import React from 'react';
import { Link } from 'react-router-dom';


const Trips = (props) => {
    return (
        <div>
            <h1>Trip Index Page</h1>
            <div>
                {props.trips.map(trip => (
                    <Link to={`/trips/${trip.id}`} key={trip.id}>
                        <li key={trip.id}>{trip.name}</li>
                    </Link>
                ))}
            </div>
            <Link to="/trips/new">Add New Trip</Link>
        </div>
    );
};

export default Trips;
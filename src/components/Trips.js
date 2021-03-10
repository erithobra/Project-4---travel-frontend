import React from 'react';

const Trips = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Trip Index Page</h1>
            <div>
                {props.trips.map(trip =>
                    <li key={trip.id}>{trip.name}</li>
                )}
            </div>
        </div>
    )
}

export default Trips;
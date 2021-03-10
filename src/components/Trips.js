import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';


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
            <Link to="/trips/new">Add New Trip</Link>
        </div>
    )
}


export default Trips;
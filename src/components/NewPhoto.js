import React, { useState } from 'react';
import axios from 'axios';

const NewPhoto = (props) => {

    const foundTrip = props.trip.find(trip => {
        console.log(trip.id)
        console.log(props.match)
        return trip.id === parseInt(props.match.params.tripId)
    })

    const [date, setDate] = useState("");
    const [photo, setPhoto] = useState("");
    const [location, setLocation] = useState("");
    const [tripId, setTripId] = useState(foundTrip.id);

    function handleDateChange(e) {
        e.preventDefault();
        setDate(e.target.value);
    } 
    
    function handlePhotoChange(e) {
        e.preventDefault();
        setPhoto(e.target.value);
    }

    function handleLocationChange(e) {
        e.preventDefault();
        setLocation(e.target.value);
    }
    
    const AddPhoto = async (e) => {
        e.preventDefault();
        const data = {
            date,
            photo,
            location,
            tripId
        }
        console.log(data)
        await axios.post(`http://localhost:3001/trips/${foundTrip.id}/photo/new`, data)
        console.log(data)
    }
    
    return (
        <div>
            <h3>This is a new photo!</h3>
            <form onSubmit={ AddPhoto }>
                <input
                    value={ date }
                    onChange={ handleDateChange }
                />
                <input
                    value={ photo }
                    onChange={ handlePhotoChange }
                />
                <input
                    value={ location }
                    onChange={ handleLocationChange }
                />                
                <input type="submit" value="Add Photo" />
            </form>
        </div>
    )
}

export default NewPhoto;
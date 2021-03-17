import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const NewPhoto = (props) => {

    const foundTrip = props.trip.find(trip => {
        console.log(trip.id)
        console.log(props.match)
        return trip.id === parseInt(props.match.params.tripId)
    })

    const [date, setDate] = useState("");
    const [photo, setPhoto] = useState("");
    const [location, setLocation] = useState("");
    const tripId = useState(foundTrip.id);
    const history = useHistory()

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
        history.push(`/trips/${foundTrip.id}`)
        console.log(data)
    }
    
    return (
        <div>
            <h3>Add your new photo here...</h3>
            <form onSubmit={ AddPhoto }>
                <input
                    value={ date }
                    onChange={ handleDateChange }
                    placeholder="Date taken"
                /> <br />
                <input
                    value={ photo }
                    onChange={ handlePhotoChange }
                    placeholder="Link to photo"
                /> <br />
                <input
                    value={ location }
                    onChange={ handleLocationChange }
                    placeholder="Location"
                /> <br /> <br />
                <input type="submit" value="Add Photo" />
            </form> <br />
            <Link to={`/trips/${foundTrip.id}`}><button>Return to Trip</button></Link>
        </div>
    )
}

export default NewPhoto;
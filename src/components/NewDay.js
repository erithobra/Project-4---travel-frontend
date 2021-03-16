import React, { useState } from 'react';
import axios from 'axios';

const NewDay = (props) => {

    const foundTrip = props.trip.find(trip => {
        console.log(trip.id)
        console.log(props.match)
        return trip.id === parseInt(props.match.params.tripId)
    })

    console.log(foundTrip)

    const [date, setDate] = useState("");
    const [journal, setJournal] = useState("");
    const [tripId, setTripId] = useState(foundTrip.id);
    
    function handleJournalChange(e) {
        e.preventDefault();
        setJournal(e.target.value);

    }

    function handleDateChange(e) {
        e.preventDefault();
        setDate(e.target.value);
    }
    
    const AddDay = async (e) => {
        e.preventDefault();
        const data = {
            date,
            journal,
            tripId
        }
        console.log(data)
        await axios.post("http://localhost:3001/trips/1/day/new", data)
        console.log(data)
    }

    return (
        <div>
            <h3>This is a new day!</h3>
            <form onSubmit={ AddDay }>
                <input
                    value={ date }
                    onChange={ handleDateChange }
                />
                <input
                    value={ journal }
                    onChange={ handleJournalChange }
                />
                <input type="submit" value="Add New Entry" />
            </form>
        </div>
    )
}


export default NewDay;
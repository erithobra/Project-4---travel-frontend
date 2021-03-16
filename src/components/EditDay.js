import React, { useState } from 'react';
import axios from 'axios';

const EditDay = (props) => {

    const foundTrip = props.trip.find(trip => {
        console.log("trip.id: ", trip.id)
        return trip.id === parseInt(props.match.params.tripId);
    })

    const foundDay = foundTrip.Days.find(day => {
        console.log("day.id: ", day.id)
        return day.id === parseInt(props.match.params.dayId)
    })

    const [date, setDate] = useState(`${foundDay.date}`);
    const [journal, setJournal] = useState(`${foundDay.journal}`);
    const [tripId, setTripId] = useState(foundTrip.id);

    function handleJournalChange(e) {
        e.preventDefault();
        setJournal(e.target.value);

    }
    
    function handleDateChange(e) {
        e.preventDefault();
        setDate(e.target.value);
    }

    const EditDay = async (e) => {
        e.preventDefault();
        const data = {
            date,
            journal,
            tripId
        }
        console.log(data)
        await axios.put(`http://localhost:3001/trips/${foundTrip.id}/day/${foundDay.id}/edit`, data)
        console.log(data)
    }

    return (
        <div>
            <h3>This is a new day!</h3>
            <form onSubmit={ EditDay }>
                <input
                    value={ date }
                    onChange={ handleDateChange }
                /> <br />
                <textarea id="journalEntry"
                    value={ journal }
                    onChange={ handleJournalChange }
                /> <br />
                <input type="submit" value="Save Changes" />
            </form>
        </div>
    )

}

export default EditDay;
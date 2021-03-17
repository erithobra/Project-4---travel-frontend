import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const NewDay = (props) => {

    const foundTrip = props.trip.find(trip => {
        console.log(trip.id)
        console.log(props.match)
        return trip.id === parseInt(props.match.params.tripId)
    })

    console.log(foundTrip)

    const [date, setDate] = useState("");
    const [journal, setJournal] = useState("");
    const tripId = useState(foundTrip.id);
    const history = useHistory()
    
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
        await axios.post(`http://localhost:3001/trips/${foundTrip.id}/day/new`, data)
        history.push(`/trips/${foundTrip.id}`)
        console.log(data)
    }

    return (
        <div>
            <h3>Add new entry...</h3>
            <form onSubmit={ AddDay }>
                <input
                    value={ date }
                    onChange={ handleDateChange }
                    placeholder="Date"
                /> <br /> <br />
                <textarea id="journalEntry"
                    value={ journal }
                    onChange={ handleJournalChange }
                    placeholder="type here...."
                /> <br /> <br />
                <input type="submit" value="Create Entry" />
            </form> <br />
            <Link to={`/trips/${foundTrip.id}`}><button>Return to Trip</button></Link>
        </div>
    )
}


export default NewDay;
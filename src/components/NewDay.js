import React, { useState } from 'react';
import axios from 'axios';

const NewDay = () => {
    console.log("this is a test")
    const [date, setDate] = useState("");
    const [journal, setJournal] = useState("");
    const [tripId, setTripId] = useState("1");
    
    function handleJournalChange(e) {
        e.preventDefault();
        setJournal(e.target.value);

    }

    function handleDateChange(e) {
        e.preventDefault();
        setDate(e.target.value);
    }
    
    // function AddDay(e) {
    //     e.preventDefault();
    //     const data = {
    //         date,
    //         journal,
    //         tripId
    //     }
    //     console.log(data)
    //     useEffect(() => {
    //         console.log("this is a test also"); 
    //         axios.post("localhost:3001/trips/1/day/new", data)
    //         // console.log(response)
    //     })
    // }

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
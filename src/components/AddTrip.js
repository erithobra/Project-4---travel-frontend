import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router';


class AddTrip extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            startDate: '',
            endDate: '',
            destination: ''
        }
    }

    handleChange = (evt) => {
        console.log(evt.target);
        const { name, value } = evt.target;
        this.setState({
            [name]: value
        });
    };

    addTrip = async (e) => {
        e.preventDefault();
        const data = {
            name: this.state.name,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            destination: this.state.destination
        }
        console.log(data);

        const response = await axios.post("http://localhost:3001/trips/postNew", data);
        console.log(response)
    }

    render() {
        const { name, startDate, endDate, destination } = this.state;
        return (
            <div>
                <h1>New Trip Form</h1>
                <form onSubmit={this.addTrip}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="startDate"
                        placeholder="Start Date"
                        value={startDate}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="endDate"
                        placeholder="End Date"
                        value={endDate}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="destination"
                        placeholder="Destination"
                        value={destination}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Create Trip" />
                </form>
            </div>
        )
    }
}

export default AddTrip;
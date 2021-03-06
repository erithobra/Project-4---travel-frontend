import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class EditTrip extends Component {
    constructor(props) {
        super(props)
        const foundTrip = this.props.trip.find(trip => {
            return trip.id === parseInt(this.props.match.params.id);
        })
        this.state = {
            redirect: true,
            tripId: foundTrip.id,
            name: foundTrip.name,
            startDate: foundTrip.startDate,
            endDate: foundTrip.endDate,
            destination: foundTrip.destination
        }
    }
    
    handleChange = (evt) => {
        console.log(evt.target);
        const { name, value } = evt.target;
        this.setState({
            [name]: value
        });
    };

    editTrip = async (e) => {
        e.preventDefault();
        const data = {
            name: this.state.name,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            destination: this.state.destination
        };
        const response = await axios.put(`${this.props.URL}/trips/${this.state.tripId}`, data);
        this.setState({
            redirect: false
        });
    };
    
    deleteTrip = async (e) => {
        const deleteTrip = await axios.delete(`${this.props.URL}/trips/${this.state.tripId}`)
        this.setState({ // this doesn't work because the url ceases to exist as soon as axios.delete executes
            redirect: false
        })
    }

    render() {
        const foundTrip = this.props.trip.find(trip => {
            return trip.id === parseInt(this.props.match.params.id);
        });
        const { name, startDate, endDate, destination } = this.state;
        return (
            <div>
                {this.state.redirect ? (
                <div>
                    {foundTrip ? (
                        <div>
                            <h1>Edit Trip Page</h1>
                            <div>
                                <form onSubmit={this.editTrip}>
                                    Trip Name: <input
                                        type="text"
                                        name="name"
                                        placeholder={foundTrip.name}
                                        value={ name }
                                        onChange={this.handleChange}
                                    /> <br />
                                    Start Date: <input
                                        type="text"
                                        name="startDate"
                                        placeholder={foundTrip.startDate}
                                        value={ startDate }
                                        onChange={this.handleChange}
                                    /> <br />
                                    End Date: <input
                                        type="text"
                                        name="endDate"
                                        placeholder={foundTrip.endDate}
                                        value={ endDate }
                                        onChange={this.handleChange}
                                    /> <br />
                                    Destination: <input
                                        type="text"
                                        name="destination"
                                        placeholder={foundTrip.destination}
                                        value={ destination }
                                        onChange={this.handleChange}
                                    /> <br /> <br />
                                        <input type="submit" value="Save Changes" />
                                </form>
                                <button onClick={this.deleteTrip}>Delete Trip</button>
                            </div>
                        </div>
                    ) :
                        <p>no trip data found</p>
                    }
                </div>)
                : 
                    <Redirect to={{
                        pathname:`/trips`,
                        state: { redirect: this.state.redirect },
                        }}
                    />
                }
            </div>
        );
    };
};

export default EditTrip;
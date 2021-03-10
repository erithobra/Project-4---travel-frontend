import React, { Component } from "react";
import axios from "axios";
import './App.css';
import { Route } from 'react-router-dom';

import Trips from "./components/Trips";
import Users from "./components/Users";
import AddTrip from "./components/AddTrip";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      users: [],
      apiDataLoaded: false,
    };
  }


  
  getTrips = async () => {
    const trips = await axios.get("http://localhost:3001/trips")
    const users = await axios.get("http://localhost:3001/users")

    this.setState({
      trips: trips.data,
      users: users.data,
      apiDataLoaded: true
    })
  }

  componentDidMount = () => {
    this.getTrips();
  }

  render() {
    console.log(this.state.trips);

    return (
      <div className="App">
        { this.state.apiDataLoaded
        ?
          <div>
            {console.log(this.state.trips[0].name)}
            <div>
              <h1>Travel App Frontend</h1>
            </div>
            <div>
              <Route exact path="/trips"
                render={() => (
                  <Trips trips={this.state.trips} />
                )}
              />
              <Route exact path="/users" 
                render={() => (
                  <Users users={this.state.users} />
                )}
              />
              <Route exact path="/trips/new"
                render={() => (
                  <AddTrip/>
                )}
              />
            </div> 
          </div>
        : 
          <p>Loading</p>
        }
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import './App.css';

import Trips from "./component/Trips";

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
    return (
      <div className="App">
        { this.state.apiDataLoaded
        ?
          <div>
            <div>
              <h1>Travel App Frontend</h1>
            </div>
            <div>
              <Trips trips = {this.state.trips.data} />
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

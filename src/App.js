import React, { Component } from "react";
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      users: [],
    };
  }


  
  getTrips = async () => {
    const trips = await axios.get("http://localhost:3001/trips")
    const users = await axios.get("http://localhost:3001/users")

    this.setState({
      trips: trips.data,
      users: users.data
    })
  }

  componentDidMount = () => {
    this.getTrips();
  }

  render() {
    return (
      <div className="App">
        <h1>Travel App Frontend</h1>
      </div>
    );
  }
}

export default App;

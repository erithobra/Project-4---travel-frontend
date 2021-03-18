import React, { Component } from "react";
import axios from "axios";
import './App.css';
import './Profile.css';
import './ViewTrip.css';
import './Day.css';
import './LandingPage.css';
import { Route, Switch } from 'react-router-dom';

import Trips from "./components/Trips";
import Users from "./components/Users";
import AddTrip from "./components/AddTrip";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import ViewTrip from "./components/ViewTrip";
import EditTrip from "./components/EditTrip";
import ViewDay from "./components/ViewDay";
import NewDay from "./components/NewDay";
import LandingPage from "./components/LandingPage";
import EditDay from "./components/EditDay";
import NewPhoto from "./components/NewPhoto";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      users: [],
      apiDataLoaded: false,
      // URL: 'http://localhost:3001',
      URL: 'https://traveljournal-eb.herokuapp.com',
    };
  };

  getTrips = async () => {
    const trips = await axios.get(`${this.state.URL}/trips`);
    const users = await axios.get(`${this.state.URL}/users`);

    this.setState({
      trips: trips.data,
      users: users.data,
      apiDataLoaded: true
    });
  };

  componentDidMount = () => {
    this.getTrips();
  };

  render() {
    return (
      <div className="App">
        { this.state.apiDataLoaded
        ?
          <div>
            <div>
              <Switch>
                <Route exact path="/"
                  render={() => (
                    <LandingPage 
                      users={this.state.users} 
                    />
                  )}
                />
                <Route exact path="/trips/new"
                  render={(caseyProps) => (
                    <AddTrip
                      user={this.state.users}
                      URL={this.state.URL}
                      { ... caseyProps}
                    />
                  )}
                />
                <Route exact path="/trips"
                  render={() => (
                    <Trips trips={this.state.trips} />
                  )}
                />
                <Route exact path="/trips/:id"
                  render={(caseyProps) => (
                    <ViewTrip
                      trip={this.state.trips}
                      { ... caseyProps}
                    />
                  )}
                />
                <Route exact path="/trips/:id/edit"
                  render={(caseyProps) => (
                    <EditTrip
                      trip={this.state.trips}
                      URL={this.state.URL}
                      { ... caseyProps}
                    />
                  )}
                />
              </Switch>  
              <Route exact path="/users" 
                render={() => (
                  <Users users={this.state.users} />
                  )}
              />
              <Route exact path="/users/signup"
                render={() => (
                  <Signup URL={this.state.URL}/>
                )}
              />
              <Route exact path="/profile/:id"
                render={(caseyProps) => (
                  <Profile
                    user={this.state.users}
                    trip={this.state.trips}
                    { ... caseyProps}
                  />
                )}
              />
              <Route exact path="/profile/:id/edit"
                render={(caseyProps) => (
                  <EditProfile
                    user={this.state.users}
                    URL={this.state.URL}
                    { ... caseyProps}
                  />
                )}
              />
              <Switch>
                <Route exact path="/trips/:tripId/photo/new"
                  render={(caseyProps) => (
                    <NewPhoto
                      trip={this.state.trips}
                      URL={this.state.URL}
                      { ... caseyProps}
                    />
                  )}
                />
                <Route exact path="/trips/:tripId/day/new"
                  render={(caseyProps) => (
                    <NewDay
                      trip={this.state.trips}
                      URL={this.state.URL}
                      { ... caseyProps}
                    />
                  )}
                />
                <Route exact path="/trips/:tripId/day/:dayId"
                  render={(caseyProps) => (
                    <ViewDay
                      trip={this.state.trips}
                      { ... caseyProps}
                    />
                  )}
                />
                <Route exact path="/trips/:tripId/day/:dayId/edit"
                  render={(caseyProps) => (
                    <EditDay
                      trip={this.state.trips}
                      URL={this.state.URL}
                      { ... caseyProps}
                    />
                  )}
                />
              </Switch>
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
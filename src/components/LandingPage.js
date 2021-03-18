import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    id: "",
    loggedIn: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState=> ({
      ...prevState,
    [name]: value
    }));
  };

  const SignIn = (e) => {
    e.preventDefault();
    const foundUser=props.users.find((user, id) => {
      return(user.username === state.username && user.password === state.password)
    });
    foundUser 
      ? setState({loggedIn: true, id: foundUser.id })
      : setState({loggedIn: false})
  };

  return (
    <div>
      {state.loggedIn
        ?
          <Redirect 
            to={{
              pathname: `/profile/${state.id}`
            }}
          />
        :
          <div className="landingPage">
            <form onSubmit={ SignIn }>
              <h3 className="landingPageH3">
                Sign in to view your travel journal!
                <br /> <br />
                <input
                  name="username"
                  value={ state.user }
                  placeholder="Username"
                  onChange={ handleChange }
                /> <br />
                <input
                  name="password"
                  value={ state.password }
                  placeholder="Password"
                  onChange={ handleChange }
                /> <br /> <br />
                <input type="submit" value="Sign In" />
              </h3>
              <h4>Don't have a profile?</h4>
              <Link to="/users/signup">Sign up here!</Link>
            </form>
          </div>
      }
    </div>
  );
};

export default LandingPage;
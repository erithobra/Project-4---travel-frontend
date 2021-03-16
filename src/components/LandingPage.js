import React, { useState } from 'react';
import { Redirect } from 'react-router';

const LandingPage = (props) => {
    console.log(props.users)
    const [state, setState] = useState({
        username: "",
        password: "",
        id: "",
        loggedIn: false
    })
    // const [user, setUser] = useState("");
    // const [password, setPassword] = useState("");
    
    const handleChange = (e) => {
        console.log(state.username)
        const { name, value } = e.target;
        setState(prevState=> ({
            ...prevState,
        [name]: value
        }))
        console.log(state.username)
    }

    // const login = (e) => {
    //     e.preventDefault();
    //     const foundUser = user.find

    // }


    // function handleUserChange(e) {
    //     e.preventDefault();
    //     setUser(e.target.value);
    // }

    // function handlePasswordChange(e) {
    //     e.preventDefault();
    //     setPassword(e.target.value);
    // }

    const SignIn = (e) => {
        e.preventDefault();
        const foundUser=props.users.find((user, id) => {
            return(user.username === state.username && user.password === state.password)
        })
        console.log(foundUser)
        foundUser 
            ? setState({loggedIn: true, id: foundUser.id })
            : setState({loggedIn: false})
    }

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
                        </form>
                    </div>
            }
        </div>
    )
}

export default LandingPage;
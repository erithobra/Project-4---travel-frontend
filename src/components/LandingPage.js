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
                    <div>
                        <h3>This is the landing page!</h3>
                        <form onSubmit={ SignIn }>
                            User: <input
                                name="username"
                                value={ state.user }
                                onChange={ handleChange }
                            /> <br />
                            Password: <input
                                name="password"
                                value={ state.password }
                                onChange={ handleChange }
                            /> <br />
                            <input type="submit" value="Sign In" />
                        </form>
                    </div>
            }
        </div>
    )
}

export default LandingPage;
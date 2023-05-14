import React, { useState } from "react";
import authContext from "./authContext";

const AuthState = (props) => {

    const s1 = {
        "token": null,
        "login": false,
        "user": null,
        "error": null,
        "loading": "false",
        "isAuthenticated": "false",
    }

    //get token from localstorage
    // const getToken = () => {
    //     const token = localStorage.getItem("token")
    //     return token
    // }

    const [state, setState] = useState(s1)


    const auth = () => {
        if (state.token) {
            setState({ ...state, isAuthenticated: true })
        }
    }
    const login = () => {
        setState({ ...state, user: null, "login": "true" })
    }
    const logout = () => {
        setState({ ...state, "login": false, "token" : " ", "user" : localStorage.removeItem("token") })
    }
    

    const updateStateFalse = () => {
        setState({ ...state, "login": true, "token": localStorage.getItem("token")  })
    }

    return (
        <authContext.Provider value={{ state, s1, login, logout, updateStateFalse }} >
            {props.children}
        </authContext.Provider >
    )
}

export default AuthState;
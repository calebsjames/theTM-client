import React from "react"
import { Route, Redirect, BrowserRouter as Router} from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
// import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const TM = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("tm_token")) {
                return <>
                    {/* <NavBar /> */}
                    <ApplicationViews />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={() => {
            if (localStorage.getItem("tm_token")) {
                return <Redirect to="/" />
            } else {
                return <Login />
            }
        }} />

        <Route path="/register" render={() => {
            if (localStorage.getItem("tm_token")) {
                return <Redirect to="/" />
            } else {
                return <Register />
            }
        }} />
    </>
)

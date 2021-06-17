import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { ShowProvider } from "./shows/ShowProvider"

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
                return <ShowProvider>
                    <Login />
                </ShowProvider>
            }
        }} />

        <Route path="/register" render={() => {
            if (localStorage.getItem("tm_token")) {
                return <Redirect to="/" />
            } else {
                return<ShowProvider>   
                     <Register />
                </ShowProvider>
            }
        }} />
    </>
)

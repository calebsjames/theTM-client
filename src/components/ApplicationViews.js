import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { ShowList } from "./shows/ShowList"

export const ApplicationViews = () => {
    console.log("1")
    return <>
        <Route exact path="/">
            <ShowList />
        </Route>      
    </>
}

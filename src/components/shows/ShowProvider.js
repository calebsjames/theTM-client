import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data. Makes a variable global.
export const ShowContext = createContext()

// This component establishes what data can be used.
export const ShowProvider = (props) => {
    const [shows, setShows] = useState([])

    const getShows = () => {
        return fetch("http://localhost:8000/shows", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
        .then(setShows)
    }

    const addShow = showObj => {
        return fetch("http://localhost:8000/shows", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            },
            body: JSON.stringify(showObj)
        })
        .then(getShows)
    }

    //function to get show by ID
    const getShowById = (id) => {
        return fetch(`http://localhost:8000/shows/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            }
        })
            .then(res => res.json())
    }

    //function to delete a show
    const deleteShow = showId => {
        return fetch(`http://localhost:8000/shows/${showId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            }
        })
            .then(getShows)
    }

    const updateShow = show => {
        return fetch(`http://localhost:8000/shows/${show.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
          },
          body: JSON.stringify(show)
        })
          .then(getShows)
      }

    const [ searchTerms, setSearchTerms ] = useState("")

    /*
        You return a context provider which has the
        `shows` state, `getShows` function,
        and the `addShow` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ShowContext.Provider value={{
            shows, getShows, addShow, getShowById, deleteShow, updateShow, searchTerms, setSearchTerms
        }}>
            {props.children}
        </ShowContext.Provider>
    )

}
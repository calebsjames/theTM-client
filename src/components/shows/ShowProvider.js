import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data. Makes a variable global.
export const ShowContext = createContext()

// This component establishes what data can be used.
export const ShowProvider = (props) => {
    const [shows, setShows] = useState([])

    const [show, setShow] = useState({
        id: 0,
        advanced: false,
        ages: "",
        artist: "",
        billing: "",
        bus_call: "00:00",
        comments: "",
        contracted: false,
        contract_signed: false,
        curfew: "00:00",
        date: "1950-01-01",
        date_on_artist_site: false,
        date_on_calendar: false,
        date_on_socials: false,
        date_on_venue_site: false,
        deposit: 0,
        deposit_paid: false,
        door_price: 0,
        door_time: "00:00",
        drive_time: "",
        gross_income: 0,
        guarantee: 0,
        guest_list: "",
        guest_list_sent: false,
        load_in: "00:00",
        miles_to_drive: 0,
        public_private: "",
        promo_materials_sent: false,
        routing: "",
        routing_notes: "",
        runner: false,     
        show_length: "",
        show_time: "00:00",
        sound_check: "00:00",
        support: "",
        status: "",
        terms: "",
        ticket_sales: 0,
        weather: ""
    });

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
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            },
            body: JSON.stringify(showObj)
        })
        .then(res => res.json())
        .then(show => {
            return show.id
        })
    }

    //function to get show by ID
    const getShowById = (id) => {
        return fetch(`http://localhost:8000/shows/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
    }

    //function to delete a show
    const deleteShow = showId => {
        return fetch(`http://localhost:8000/shows/${showId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(getShows)
    }

    const updateShow = show => {
        return fetch(`http://localhost:8000/shows/${show.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("tm_token")}`
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
            shows, getShows, addShow, getShowById, deleteShow, updateShow, searchTerms, setSearchTerms, show, setShow
        }}>
            {props.children}
        </ShowContext.Provider>
    )

}
import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data. Makes a variable global.
export const VenueContext = createContext()

// This component establishes what data can be used.
export const VenueProvider = (props) => {
    const [venues, setVenues] = useState([])

    const [venue, setVenue] = useState({
        address: "",
        capacity: 0,
        cell_phone: "",
        city: "",
        contact: "",
        email: "",
        hall_fee: 0,
        phone: "",
        website: "",
        merch_sales: "",
        merch_fee: "",     
        name: "",
        state: "",
        zip: ""
    });

    const getVenues = () => {
        return fetch("http://localhost:8000/venues", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
        .then(setVenues)
    }

    const addVenue = venueObj => {
        return fetch("http://localhost:8000/venues", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            },
            body: JSON.stringify(venueObj)
        })
        .then(getVenues)
    }

    //function to get venue by ID
    const getVenueById = (id) => {
        return fetch(`http://localhost:8000/venues/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
    }

    //function to delete a venue
    const deleteVenue = venueId => {
        return fetch(`http://localhost:8000/venues/${venueId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(getVenues)
    }

    const updateVenue = venue => {
        return fetch(`http://localhost:8000/venues/${venue.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("tm_token")}`
          },
          body: JSON.stringify(venue)
        })
          .then(getVenues)
      }

    const [ searchTerms, setSearchTerms ] = useState("")

    /*
        You return a context provider which has the
        `venues` state, `getVenues` function,
        and the `addVenue` function as keys. This
        allows any child elements to access them.
    */
    return (
        <VenueContext.Provider value={{
            venues, getVenues, addVenue, getVenueById, deleteVenue, updateVenue, searchTerms, setSearchTerms, venue, setVenue
        }}>
            {props.children}
        </VenueContext.Provider>
    )

}
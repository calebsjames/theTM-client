import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data. Makes a variable global.
export const HotelContext = createContext()

// This component establishes what data can be used.
export const HotelProvider = (props) => {
    const [hotels, setHotels] = useState([])

    const getHotels = () => {
        return fetch("http://localhost:8000/hotels", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
        .then(setHotels)
    }

    const addHotel = hotelObj => {
        return fetch("http://localhost:8000/hotels", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            },
            body: JSON.stringify(hotelObj)
        })
        .then(getHotels)
    }

    //function to get hotel by ID
    const getHotelById = (id) => {
        return fetch(`http://localhost:8000/hotels/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
    }

    //function to delete a hotel
    const deleteHotel = hotelId => {
        return fetch(`http://localhost:8000/hotels/${hotelId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(getHotels)
    }

    const updateHotel = hotel => {
        return fetch(`http://localhost:8000/hotels/${hotel.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("tm_token")}`
          },
          body: JSON.stringify(hotel)
        })
          .then(getHotels)
      }

    const [ searchTerms, setSearchTerms ] = useState("")

    /*
        You return a context provider which has the
        `hotels` state, `getHotels` function,
        and the `addHotel` function as keys. This
        allows any child elements to access them.
    */
    return (
        <HotelContext.Provider value={{
            hotels, getHotels, addHotel, getHotelById, deleteHotel, updateHotel, searchTerms, setSearchTerms
        }}>
            {props.children}
        </HotelContext.Provider>
    )

}
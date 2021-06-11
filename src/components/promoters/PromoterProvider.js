import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data. Makes a variable global.
export const PromoterContext = createContext()

// This component establishes what data can be used.
export const PromoterProvider = (props) => {
    const [promoters, setPromoters] = useState([])

    //Define the intial state of the Promoter with useState()
    const [promoter, setPromoter] = useState({
        address: "",
        cell_phone: "",
        city: "",
        company: "",
        email: "", 
        name: "",
        notes: "",
        phone: "",
        state: "",
        zip: ""
    });

    const getPromoters = () => {
        return fetch("http://localhost:8000/promoters", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
        .then(setPromoters)
    }

    const addPromoter = promoterObj => {
        return fetch("http://localhost:8000/promoters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            },
            body: JSON.stringify(promoterObj)
        })
        .then(getPromoters)
    }

    //function to get promoter by ID
    const getPromoterById = (id) => {
        return fetch(`http://localhost:8000/promoters/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
    }

    //function to delete a promoter
    const deletePromoter = promoterId => {
        return fetch(`http://localhost:8000/promoters/${promoterId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(getPromoters)
    }

    const updatePromoter = promoter => {
        return fetch(`http://localhost:8000/promoters/${promoter.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("tm_token")}`
          },
          body: JSON.stringify(promoter)
        })
          .then(getPromoters)
      }

    const [ searchTerms, setSearchTerms ] = useState("")

    /*
        You return a context provider which has the
        `promoters` state, `getPromoters` function,
        and the `addPromoter` function as keys. This
        allows any child elements to access them.
    */
    return (
        <PromoterContext.Provider value={{
            promoters, getPromoters, addPromoter, getPromoterById, deletePromoter, updatePromoter, searchTerms, setSearchTerms, promoter, setPromoter
        }}>
            {props.children}
        </PromoterContext.Provider>
    )

}
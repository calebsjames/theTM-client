import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data. Makes a variable global.
export const PromoterContext = createContext()

// This component establishes what data can be used.
export const PromoterProvider = (props) => {
    const [modal, setModal] = useState(false)

    const [promoters, setPromoters] = useState([])

    //Define the intial state of the Promoter with useState()
    const [promoter, setPromoter] = useState({
        address: "",
        cell_phone: "",
        city: "",
        comments: "",
        company: "",
        email: "", 
        name: "",
        notes: "",
        phone: "",
        state: "",
        zip: ""
    });

    const getPromoters = () => {
        return fetch("https://the-tm-api.herokuapp.com/promoters", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
        .then(setPromoters)
    }

    const addPromoter = promoterObj => {
        return fetch("https://the-tm-api.herokuapp.com/promoters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            },
            body: JSON.stringify(promoterObj)
        })
        .then(res => res.json())
        .then(promoter => {
            return promoter
        })
    }

    //function to get promoter by ID
    const getPromoterById = (id) => {
        return fetch(`https://the-tm-api.herokuapp.com/promoters/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
    }

    //function to delete a promoter
    const deletePromoter = promoterId => {
        return fetch(`https://the-tm-api.herokuapp.com/promoters/${promoterId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(getPromoters)
    }

    const updatePromoter = promoter => {
        return fetch(`https://the-tm-api.herokuapp.com/promoters/${promoter.id}`, {
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
            promoters, getPromoters, addPromoter, getPromoterById, deletePromoter, updatePromoter, 
            searchTerms, setSearchTerms, promoter, setPromoter, modal, setModal
        }}>
            {props.children}
        </PromoterContext.Provider>
    )

}
import React, { useState, createContext, useContext } from "react"
import { useParams } from "react-router"
import { ShowContext } from "../shows/ShowProvider";

// The context is imported and used by individual components that need data. Makes a variable global.
export const ContactNoteContext = createContext()


// This component establishes what data can be used.
export const ContactNoteProvider = (props) => {
    const { showId } = useParams()
    const [contactNotes, setContactNotes] = useState([])
    const { addShow, getShowById, editShow, getShows, show, setShow } = useContext(ShowContext)
    
    
    const [contactNote, setContactNote] = useState({
        
    })

    const getContactNotes = () => {
        return fetch("https://the-tm-api.herokuapp.com/contactNotes", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
        .then(setContactNotes)
    }

    const addContactNote = contactNoteObj => {
        return fetch("https://the-tm-api.herokuapp.com/contactNotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            },
            body: JSON.stringify(contactNoteObj)
        })
        .then(getContactNotes)
    }

    //function to get contactNote by ID
    const getContactNoteById = (id) => {
        return fetch(`https://the-tm-api.herokuapp.com/contactNotes/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
    }

    //function to delete a contactNote
    const deleteContactNote = contactNoteId => {
        return fetch(`https://the-tm-api.herokuapp.com/contactNotes/${contactNoteId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(getContactNotes)
    }

    const updateContactNote = contactNote => {
        return fetch(`https://the-tm-api.herokuapp.com/contactNotes/${contactNote.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("tm_token")}`
          },
          body: JSON.stringify(contactNote)
        })
          .then(getContactNotes)
      }

    const [ searchTerms, setSearchTerms ] = useState("")

    /*
        You return a context provider which has the
        `contactNotes` state, `getContactNotes` function,
        and the `addContactNote` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ContactNoteContext.Provider value={{
            contactNotes, getContactNotes, addContactNote, getContactNoteById, deleteContactNote, updateContactNote, searchTerms, setSearchTerms, contactNote, setContactNote
        }}>
            {props.children}
        </ContactNoteContext.Provider>
    )

}
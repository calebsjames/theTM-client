import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data. Makes a variable global.
export const ContactNoteContext = createContext()

// This component establishes what data can be used.
export const ContactNoteProvider = (props) => {
    const [contactNotes, setContactNotes] = useState([])

    const getContactNotes = () => {
        return fetch("http://localhost:8000/contactNotes", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("tm_token")}`
            }
        })
            .then(res => res.json())
        .then(setContactNotes)
    }

    const addContactNote = contactNoteObj => {
        return fetch("http://localhost:8000/contactNotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            },
            body: JSON.stringify(contactNoteObj)
        })
        .then(getContactNotes)
    }

    //function to get contactNote by ID
    const getContactNoteById = (id) => {
        return fetch(`http://localhost:8000/contactNotes/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            }
        })
            .then(res => res.json())
    }

    //function to delete a contactNote
    const deleteContactNote = contactNoteId => {
        return fetch(`http://localhost:8000/contactNotes/${contactNoteId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            }
        })
            .then(getContactNotes)
    }

    const updateContactNote = contactNote => {
        return fetch(`http://localhost:8000/contactNotes/${contactNote.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
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
            contactNotes, getContactNotes, addContactNote, getContactNoteById, deleteContactNote, updateContactNote, searchTerms, setSearchTerms
        }}>
            {props.children}
        </ContactNoteContext.Provider>
    )

}
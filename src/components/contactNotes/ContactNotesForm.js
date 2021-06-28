//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ContactNoteContext } from "./ContactNoteProvider";
import { ShowContext } from "../shows/ShowProvider";



//export function to display form for new contactNote
export const ContactNoteForm = () => {
    
    const { addContactNote, getContactNoteById, editContactNote, getContactNotes, contactNote, contactNotes, setContactNote } = useContext(ContactNoteContext)
    const { addShow, getShowById, editShow, getShows, show, setShow } = useContext(ShowContext)
    const { showId } = useParams()
    // const [ isLoading, setIsLoading ] = useState(true);
    const history = useHistory();

    const handleContactEntry = (e) => {
        e.preventDefault()
        const newContactNote = { ...contactNote }
        newContactNote.show = showId
        

        addContactNote(newContactNote)
        
    }


    //when something changes, save it with setContact
    const handleControlledInputChange = (event) => {
        //make a new copy of contactNote
        const newContactNote = { ...contactNote }
        //the value of the event
        let selectedVal = event.target.value

        /* Set the property to the new value
        using object bracket notation. */
        newContactNote[event.target.id] = selectedVal
        
        // update state
        setContactNote(newContactNote)   
    }




    //Return this HTML
    return (
        <>
        <article id="contactNote_form_a">
        <form className="contactNoteForm">
            <h2 className="formTitle">Contact</h2>
       
                <div className="flex">
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="date">Date: </label>
                            <input type="date" id="date" className="form-field"
                             placeholder="Date" value={contactNote?.date}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                   
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="method">Method: </label>
                            <input type="text" id="method" className="form-field"
                            placeholder="Method" value={contactNote?.method}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="text">Text: </label>
                            <input type="text" id="text" className="form-field"
                            placeholder="Text" value={contactNote?.text}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>

                    <button className="btn btn-primary"
                    onClick={handleContactEntry}>
                    +</button>

                </div>
        </form>
        </article>
        </>
    )
    }

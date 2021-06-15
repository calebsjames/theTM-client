//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ContactNoteContext } from "./ContactNoteProvider";
import { ShowContext } from "../shows/ShowProvider";
import { ContactNote } from "./ContactNotes";



//export function to display form for new contactNote
export const ContactNoteListForm = () => {
    
    const { contactNotes, addContactNote, getContactNoteById, editContactNote, getContactNotes, contactNote, setContactNote } = useContext(ContactNoteContext)
    const { addShow, getShowById, editShow, getShows, show, setShow } = useContext(ShowContext)
    const { showId } = useParams()
    // const [ isLoading, setIsLoading ] = useState(true);
    const history = useHistory();
    









    useEffect(() => {
        
        getContactNotes()

    }, [])

    let filteredContactNotes = contactNotes.filter(s => parseInt(s.show.id) === parseInt(showId))
    
    //Return this HTML
    return (
        <>
        <section id="contactNote">
            {filteredContactNotes.map(contactNoteObject => {
            
                return <ContactNote key={contactNoteObject.id} 
                contactNoteInstance={contactNoteObject}
                />

            })}
        </section>
        </>
    )
    }

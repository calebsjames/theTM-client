import { useContext } from "react"
import { ContactNoteContext } from "../contactNotes/ContactNoteProvider";





export const ContactNote = ({contactNoteInstance}) => {
    
    const { contactNotes, addContactNote, getContactNoteById, updateContactNote, getContactNotes, contactNote, setContactNote } = useContext(ContactNoteContext)
   


    //when something changes, save it with setContactNote
    const handleControlledInputChange = (event) => {
        //make a new copy of contactNote
        const newContactNote = { ...contactNote }
        //the value of the event
        let selectedVal = event.target.value
        // Set the property to the new value 
        newContactNote[event.target.id] = selectedVal       
        // update state
        setContactNote(newContactNote)   
    }



    const handleContactNoteEntry = () => {  
        updateContactNote(contactNote)
    }

    


    return(
    <article id={`contactNoteEntry--${contactNoteInstance?.id}`}>
        <form className="contactNoteForm">

            <div className="flex">
            {contactNoteInstance?.date}  {contactNoteInstance?.method}  {contactNoteInstance?.text}
                

                <button className="btn btn-primary"
                onClick={handleContactNoteEntry}>
                +</button>

            </div>

        </form>
    </article>
    )
}

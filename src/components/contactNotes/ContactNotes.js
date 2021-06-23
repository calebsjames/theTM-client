import { useContext } from "react"
import { ContactNoteContext } from "../contactNotes/ContactNoteProvider";





export const ContactNote = ({contactNoteInstance}) => {
    
    const { deleteContactNote } = useContext(ContactNoteContext)


    const handleDeleteContactNote = () => {  
        deleteContactNote(contactNoteInstance?.id)
    }

    


    return(
    <article id={`contactNoteEntry--${contactNoteInstance?.id}`}>
        <form className="contactNoteForm">

            <div className="flex">
                <div className="contactNote">
                    {contactNoteInstance?.date}
                </div>
                <div className="contactNote">
                    {contactNoteInstance?.method}
                </div>
                <div className="contactNote">
                    {contactNoteInstance?.text}
                </div>
                
                

                <button className="btn btn-primary"
                onClick={handleDeleteContactNote}>
                -</button>

            </div>

        </form>
    </article>
    )
}

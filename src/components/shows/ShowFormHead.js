//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ShowContext } from "../shows/ShowProvider";
import "./ShowFormHead.css"
import "../App.css"


//export function to display form for new show
export const ShowFormHead = () => {
    
    const { addShow, getShowById, editShow, getShows, show, setShow } = useContext(ShowContext)
    const { showId } = useParams()
    const [ isLoading, setIsLoading ] = useState(true);
    const history = useHistory();
    




    //when something changes, save it with setShow
    const handleControlledInputChange = (event) => {
        //make a new copy of show
        const newShow = { ...show }
        //the value of the event
        let selectedVal = event.target.value

        /* Set the property to the new value
        using object bracket notation. */
        newShow[event.target.id] = selectedVal
        
        // update state
        setShow(newShow)   
    }



    useEffect(() => {
        //get all Shows
        getShows().then(() => {

            //get that show
            getShowById(showId)
            //then setShow to that found Show
            .then(Show => {
                setShow(Show)
                
                setIsLoading(false)
            })
        })
    }, [])


    //Return this HTML
    return (
        <>
        <article id="show_form_head">
            <form className="showForm">
                <div className="flex row">
                    
                    
                    <fieldset className="form" id="artist_form">
                        <div className="form-group">
                            <input type="text" id="artist" className="form-field"
                            placeholder="Artist" value={show.artist}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    
                    <div className="column">
                        <fieldset className="form" id="date_form">
                            <div className="form-group">
                                <input type="date" id="date" className="form-field"
                                placeholder="Date" value={show.date}
                                onChange={handleControlledInputChange}/>
                            </div>
                        </fieldset>
                        <fieldset className="form" id="status_form">
                            <div className="form-group">
                                <select type="text" id="status" className="form-field"
                                placeholder="Status" value={show.status}
                                onChange={handleControlledInputChange}/>
                            </div>
                        </fieldset>
                    </div>
  
                </div>
            </form>
        </article>
        </>
    )
    }

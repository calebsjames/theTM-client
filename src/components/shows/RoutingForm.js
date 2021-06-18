//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ShowContext } from "./ShowProvider";
import "../App.css"
import "./Show.css"


//export function to display form for new show
export const RoutingForm = () => {
    
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
    }, [showId])






    //Return this HTML
    return (
        <>
        <article id="show_form_a">
        <form className="showForm">
            <h2 className="formTitle">Routing</h2>

            <div className="flex">
                
                <fieldset className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="routing">Routing: </label>
                        <input type="text" id="routing" className="form-field"
                        placeholder="Routing" value={show.routing}
                        onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>
                <fieldset className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="miles_to_drive">Miles: </label>
                        <input type="text" id="miles_to_drive" className="form-field"
                        placeholder="Miles" value={show.miles_to_drive}
                        onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>
                    
            </div>
                                       
            <fieldset className="form">
                <div className="form-group">    
                    <textarea cols="50" rows="10" 
                    id="routing_notes" className="form-field"
                    value={show.routing_notes} placeholder="Notes"
                    onChange={handleControlledInputChange}/>
                </div>
            </fieldset>

        </form>
        </article>
        </>
    )
    }

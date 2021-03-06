//import statements
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ShowContext } from "../shows/ShowProvider";
import "../App.css"
import "./Show.css"


//export function to display form for new show
export const ShowFormA = () => {
    
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

            //get that show
            getShowById(showId)
            //then setShow to that found Show
            .then(Show => {
                setShow(Show)                
                setIsLoading(false)
            })
        }
    , [showId])


    //Return this HTML
    return (
        <>
        <article id="show_form_a">
        <form className="showForm">
            <h2 className="formTitle">Show Information</h2>
            <fieldset className="form">
                <div className="form-group">
                    <label className="label" htmlFor="terms">Terms: </label>
                    <input type="text" id="terms" className="form-field"
                    placeholder="Terms" value={show.terms}
                    onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <div className="flex sb">
                
                <fieldset className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="load_in">Load-in: </label>
                        <input type="time" id="load_in" className="form-field column1"
                        placeholder="Load-in" value={show.load_in}
                        onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>
                <fieldset className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="door_price">Door Price: </label>
                        <input type="text" id="door_price" className="form-field"
                        placeholder="Door Price" value={show.door_price}
                        onChange={handleControlledInputChange} />
                    </div>
                </fieldset>
                <fieldset className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="deposit">Deposit: </label>
                        <input type="text" id="deposit" className="form-field"
                        placeholder="Deposit" value={show.deposit}
                        onChange={handleControlledInputChange} />
                    </div>
                </fieldset>
            </div>
            <div className="flex sb">

                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="sound_check">Sound Check</label>
                            <input type="time" id="sound_check" className="form-field column1"
                            placeholder="Sound Check" value={show.sound_check}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
                    <fieldset className="form">
                        <div className="form-group">
                            <label className="label" htmlFor="door_time">Doors: </label>
                            <input type="time" id="door_time" className="form-field column1" 
                            placeholder="Doors" value={show.door_time}
                            onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
            </div>

                    
                        <div className="flex sb">
                            <fieldset className="form">
                                <div className="form-group">
                                    <label className="label" htmlFor="show_time">Show Time: </label>
                                    <input type="time" id="show_time" className="form-field column1" 
                                    placeholder="Show Time" value={show.show_time}
                                    onChange={handleControlledInputChange}/>
                                </div>
                            </fieldset>
                            <fieldset className="form">
                                <div className="form-group">
                                    <label className="label" htmlFor="show_length">Set Length: </label>
                                    <input type="text" id="show_length" className="form-field column1" 
                                    placeholder="Set Length" value={show.show_length}
                                    onChange={handleControlledInputChange}/>
                                </div>
                            </fieldset>
                        </div>    
                        <div className="flex sb">    
                            {/* Change to select */}
                            <fieldset className="form">
                                <div className="form-group">
                                    <label className="label" htmlFor="public_private">Public / Private: </label>
                                    <input type="text" id="public_private" className="form-field column1"
                                    placeholder="Public / Private" value={show.public_private}
                                    onChange={handleControlledInputChange} />
                                </div>
                            </fieldset>
                            <fieldset className="form">
                                <div className="form-group">
                                    <label className="label" htmlFor="billing">Billing: </label>
                                    <input type="text" id="billing" className="form-field"
                                    placeholder="Billing" value={show.billing}
                                    onChange={handleControlledInputChange} />
                                </div>
                            </fieldset>
                            <fieldset className="form">
                                <div className="form-group">
                                    <label className="label" htmlFor="ages">Ages: </label>
                                    <input type="text" id="ages" className="form-field"
                                    placeholder="Ages" value={show.ages}
                                    onChange={handleControlledInputChange} />
                                </div>
                            </fieldset>
                        </div>
                    
                

               
                    <div>
                    </div>
                <div>    
                    
                </div>
            
                <fieldset className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="weather">Weather: </label>
                        <input type="text" id="weather" className="form-field"
                        placeholder="Weather" value={show.weather}
                        onChange={handleControlledInputChange} />
                    </div>
                </fieldset>
                <fieldset className="form">
                    <div className="form-group">    
                        <textarea cols="37" rows="10" 
                        id="comments" className="form-field"
                        value={show.comments} placeholder="Notes"
                        onChange={handleControlledInputChange}/>
                    </div>
                </fieldset> 
            
            
        </form>
        </article>
        </>
    )
    }
